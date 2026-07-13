"use client";

import { Bot } from "lucide-react";
import { useRef } from "react";
import { useEnhancedMotion } from "@/components/motion/use-enhanced-motion";
import { useInViewOnce } from "@/components/motion/use-in-view-once";

export function ChatbotPreview() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { inView, reducedMotion } = useInViewOnce(ref);
  const enhanced = useEnhancedMotion();
  const state = !enhanced || inView || reducedMotion ? "active" : "idle";

  return (
    <div
      ref={ref}
      className="chatbot-preview rounded-xl border border-line bg-white p-5 shadow-md"
      data-state={state}
      data-motion-enhanced={enhanced ? "true" : "false"}
    >
      <div className="flex items-center gap-3 border-b border-line pb-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue text-white">
          <Bot className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-semibold text-brand-blue">COAN information assistant</h3>
          <p className="text-xs text-slate-600">Preview only | source-oriented answer pattern</p>
        </div>
      </div>

      <div className="mt-5 grid gap-4">
        <div className="chatbot-preview__message chatbot-preview__message--user rounded-lg bg-muted p-4">
          <p className="text-xs font-semibold uppercase text-slate-500">User</p>
          <p className="mt-2 text-sm leading-6 text-slate-800">How can I avoid rental scams?</p>
        </div>

        <div className="chatbot-preview__typing rounded-lg border border-line bg-white p-4" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="chatbot-preview__message chatbot-preview__message--assistant rounded-lg border border-line bg-white p-4">
          <p className="text-xs font-semibold uppercase text-brand-red">Assistant preview</p>
          <p className="mt-2 text-sm leading-6 text-slate-800">
            Start by checking whether the lease terms, deposit rules, landlord
            identity, and written records are clear. For legal issues, verify
            with your provincial tenant board or a qualified professional.
          </p>
          <div className="mt-4 rounded-md bg-brand-blue-soft p-3">
            <p className="text-xs font-semibold uppercase text-brand-blue">
              Citation placeholder
            </p>
            <p className="mt-1 text-xs leading-5 text-slate-700">
              Future responses will support official source links and curated
              COAN resource citations.
            </p>
          </div>
        </div>
      </div>

      <p className="mt-5 border-t border-line pt-4 text-xs leading-5 text-slate-600">
        Disclaimer: COAN provides general information only. It is not legal,
        medical, financial, tax, or immigration advice.
      </p>
    </div>
  );
}
