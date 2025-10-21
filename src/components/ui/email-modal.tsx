"use client";

import { useState, useEffect } from "react";
import { X, Paperclip, Link2, Smile, Image as ImageIcon, MoreHorizontal } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EmailModal({ isOpen, onClose }: EmailModalProps) {
  const [to, setTo] = useState("jrlsanlucar11@gmail.com");
  const [subject, setSubject] = useState("Contratación inminente");
  const [message, setMessage] = useState("Nos ha encantado tu presentación Javi, vente a Valencia que te contratamos.");
  const [showCcBcc, setShowCcBcc] = useState(false);

  const handleSend = () => {
    // Crear el mailto link
    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
    onClose();
  };

  // Cerrar con ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100vw-2rem)] md:w-[600px] z-[101]"
          >
            <div className="rounded-lg shadow-2xl bg-background border flex flex-col max-h-[calc(100vh-2rem)]">
              {/* Header */}
              <div className="flex justify-between items-center px-4 py-3 bg-muted/30 border-b rounded-t-lg">
                <h2 className="font-medium text-foreground">Mensaje nuevo</h2>
                <button
                  onClick={onClose}
                  className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded hover:bg-muted/50"
                  aria-label="Cerrar"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* To field */}
              <div className="px-4 py-2 border-b flex items-center gap-2">
                <span className="text-muted-foreground text-sm min-w-[40px]">Para</span>
                <input
                  type="email"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="flex-1 border-none outline-none bg-transparent text-foreground text-sm"
                  placeholder="Destinatario"
                  disabled
                />
                <button
                  onClick={() => setShowCcBcc(!showCcBcc)}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cc Cco
                </button>
              </div>

              {/* Cc/Bcc fields (conditional) */}
              {showCcBcc && (
                <>
                  <div className="px-4 py-2 border-b flex items-center gap-2">
                    <span className="text-muted-foreground text-sm min-w-[40px]">Cc</span>
                    <input
                      type="email"
                      className="flex-1 border-none outline-none bg-transparent text-foreground text-sm"
                      placeholder="Cc"
                    />
                  </div>
                  <div className="px-4 py-2 border-b flex items-center gap-2">
                    <span className="text-muted-foreground text-sm min-w-[40px]">Cco</span>
                    <input
                      type="email"
                      className="flex-1 border-none outline-none bg-transparent text-foreground text-sm"
                      placeholder="Cco"
                    />
                  </div>
                </>
              )}

              {/* Subject */}
              <div className="px-4 py-2 border-b">
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full border-none outline-none bg-transparent text-foreground text-sm"
                  placeholder="Asunto"
                />
              </div>

              {/* Message body */}
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 p-4 outline-none resize-none bg-transparent text-foreground text-sm min-h-[280px]"
                placeholder="Escribe tu mensaje..."
              />

              {/* Footer */}
              <div className="flex justify-between items-center px-4 py-3 border-t bg-muted/20 rounded-b-lg">
                <button
                  onClick={handleSend}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-md font-medium transition-colors"
                >
                  Enviar
                </button>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <button className="hover:text-foreground transition-colors" title="Adjuntar archivo">
                    <Paperclip className="size-5" />
                  </button>
                  <button className="hover:text-foreground transition-colors" title="Insertar enlace">
                    <Link2 className="size-5" />
                  </button>
                  <button className="hover:text-foreground transition-colors" title="Insertar emoji">
                    <Smile className="size-5" />
                  </button>
                  <button className="hover:text-foreground transition-colors" title="Insertar imagen">
                    <ImageIcon className="size-5" />
                  </button>
                  <button className="hover:text-foreground transition-colors" title="Más opciones">
                    <MoreHorizontal className="size-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
