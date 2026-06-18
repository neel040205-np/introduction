'use client';

import React, { useState, useEffect } from 'react';
import { Terminal, FileCode, Play, CheckCircle } from 'lucide-react';

const projectFiles = {
  DocElex: {
    filename: 'DocElexVault.ts',
    lang: 'typescript',
    code: `import { CryptEngine, Cloudinary } from '@services/secure';
import { AuditLogger, JWTAuth } from '@middleware/core';

export class DocElexVault {
  // Encrypt & Upload student files
  async secureUpload(studentId: string, doc: Document) {
    const session = await JWTAuth.verifyToken();
    const encryptedData = CryptEngine.encrypt(doc.buffer);
    
    const result = await Cloudinary.upload(encryptedData, {
      folder: 'docelex/vault/' + studentId,
      access_control: 'private'
    });

    await AuditLogger.log({
      action: 'UPLOAD_DOCUMENT',
      user: session.userId,
      status: 'SUCCESS'
    });

    return { vaultUrl: result.secure_url, status: 201 };
  }
}`
  },
  OHRM: {
    filename: 'PayrollEngine.ts',
    lang: 'typescript',
    code: `import { DB, Nodemailer } from '@core/infrastructure';
import { SalaryCalculator, LeaveTracker } from './utils';

export async function processMonthlyPayroll(empId: string) {
  const employee = await DB.users.findById(empId);
  const attendance = await LeaveTracker.getAttendance(empId);
  
  const payroll = SalaryCalculator.calculate({
    base: employee.baseSalary,
    workingDays: attendance.daysPresent,
    leaves: attendance.unapprovedLeaves
  });

  await DB.payroll.create({ empId, ...payroll });
  
  await Nodemailer.sendPayslipEmail(employee.email, {
    month: 'June',
    amount: payroll.netAmount
  });

  return { status: 'PAID', ref: payroll.transactionId };
}`
  },
  DentalClinic: {
    filename: 'AppointmentNotifier.ts',
    lang: 'typescript',
    code: `import { Supabase, Twilio } from '@providers/cloud';
import { QRGenerator } from './qr';

export async function scheduleAppointment(booking: Booking) {
  const { data, error } = await Supabase
    .from('appointments')
    .insert([booking])
    .select();

  const qrTicket = await QRGenerator.generate(data[0].id);
  
  // WhatsApp & SMS notifications
  await Twilio.sendWhatsApp({
    to: booking.patientPhone,
    body: 'Hello ' + booking.patientName + ', your dental appt is confirmed on ' + booking.date + '. QR Code: ' + qrTicket
  });

  return { confirmed: true, qr: qrTicket };
}`
  }
};

export default function CodeCanvas() {
  const [activeTab, setActiveTab] = useState<'DocElex' | 'OHRM' | 'DentalClinic'>('DocElex');
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);

  useEffect(() => {
    setConsoleLogs([
      '$ npm run dev',
      'ready - started server on localhost:3000',
      'info - compiled successfully'
    ]);

    const interval = setInterval(() => {
      const logs = {
        DocElex: [
          `[DocElex] [${new Date().toLocaleTimeString()}] Secure Document Vault online.`,
          `[DocElex] [${new Date().toLocaleTimeString()}] Audit Logger listening for uploads.`
        ],
        OHRM: [
          `[OHRM] [${new Date().toLocaleTimeString()}] Attendance tracker synced.`,
          `[OHRM] [${new Date().toLocaleTimeString()}] Nodemailer payroll templates loaded.`
        ],
        DentalClinic: [
          `[Dental] [${new Date().toLocaleTimeString()}] Supabase PostgreSQL client connected.`,
          `[Dental] [${new Date().toLocaleTimeString()}] Twilio notification worker polling.`
        ]
      };
      
      const currentLogs = logs[activeTab];
      const randomLog = currentLogs[Math.floor(Math.random() * currentLogs.length)];
      setConsoleLogs(prev => [...prev.slice(-4), randomLog]);
    }, 4000);

    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <div className="w-full max-w-lg rounded-2xl border border-glass-border glass-premium shadow-2xl overflow-hidden flex flex-col font-mono text-[11px] leading-relaxed text-foreground select-none relative group">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent pointer-events-none" />

      {/* Editor Header */}
      <div className="bg-background/80 border-b border-glass-border px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex items-center gap-1 text-text-muted text-[10px] uppercase font-bold tracking-wider">
          <Terminal size={12} className="text-primary" />
          <span>Interactive IDE</span>
        </div>
        <div className="h-4 w-4" />
      </div>

      {/* Editor Tabs */}
      <div className="bg-background/40 border-b border-glass-border flex overflow-x-auto">
        {(Object.keys(projectFiles) as Array<keyof typeof projectFiles>).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex items-center gap-1.5 px-4 py-2 border-r border-glass-border transition-colors text-[10px] cursor-pointer font-semibold ${
              activeTab === tab 
                ? 'bg-background/75 text-primary border-b-2 border-b-primary font-bold' 
                : 'text-text-muted hover:bg-glass hover:text-foreground'
            }`}
          >
            <FileCode size={11} className={activeTab === tab ? 'text-primary' : 'text-text-muted'} />
            <span>{projectFiles[tab].filename}</span>
          </button>
        ))}
      </div>

      {/* Code Area */}
      <div className="p-4 bg-background/20 min-h-[260px] overflow-y-auto max-h-[260px] text-left relative no-scrollbar">
        <pre className="text-text-muted">
          <code>
            {projectFiles[activeTab].code.split('\n').map((line, idx) => {
              const coloredLine = line
                .replace(/(import|export|class|const|let|async|await|return|function|from)/g, '<span class="text-primary font-bold">$1</span>')
                .replace(/(string|Document|Booking|void)/g, '<span class="text-blue-400">$1</span>')
                .replace(/(\".*\"|\`.*\`)/g, '<span class="text-green-400 font-medium">$1</span>')
                .replace(/(\/\/.*)/g, '<span class="text-text-muted/60 italic">$1</span>');

              return (
                <div key={idx} className="flex gap-4">
                  <span className="w-5 text-right text-text-muted/40 select-none">{idx + 1}</span>
                  <span dangerouslySetInnerHTML={{ __html: coloredLine }} />
                </div>
              );
            })}
          </code>
        </pre>
      </div>

      {/* Terminal Footer */}
      <div className="bg-background/90 border-t border-glass-border p-3 flex flex-col gap-1 text-left min-h-[95px] max-h-[95px] overflow-hidden">
        <div className="flex items-center justify-between text-[10px] text-text-muted/70 pb-1 border-b border-glass-border/30">
          <div className="flex items-center gap-1">
            <Play size={10} className="text-green-400 fill-green-400/20" />
            <span>LOCAL DEV SERVER</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle size={10} className="text-primary" />
            <span>COMPILED</span>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto terminal-scrollbar pr-1 pt-1">
          {consoleLogs.map((log, idx) => (
            <div 
              key={idx} 
              className={`leading-normal ${
                log.startsWith('$') 
                  ? 'text-blue-400' 
                  : log.includes('error') 
                    ? 'text-red-400' 
                    : log.includes('[') 
                      ? 'text-green-400/90' 
                      : 'text-text-muted'
              }`}
            >
              {log}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
