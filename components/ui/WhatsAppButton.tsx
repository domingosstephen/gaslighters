"use client";

export function WhatsAppButton() {
  const phone = "33758885187";
  const message = encodeURIComponent(
    "Hi, I'm interested in wholesale gas lighters. Could I get a quote?"
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-7 w-7"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0Zm9.302 22.602c-.39 1.1-2.274 2.104-3.136 2.168-.788.06-1.534.372-5.166-1.108-4.388-1.788-7.146-6.282-7.362-6.574-.21-.286-1.726-2.298-1.726-4.384 0-2.088 1.086-3.114 1.482-3.542.39-.42.858-.528 1.146-.528.282 0 .57.006.816.018.27.012.624-.102.978.744.36.864 1.23 2.994 1.338 3.21.108.21.18.462.036.744-.144.288-.216.462-.432.714-.21.252-.444.564-.636.756-.21.21-.432.438-.186.858.246.42 1.098 1.812 2.358 2.934 1.62 1.44 2.988 1.89 3.414 2.1.42.21.666.18.912-.108.246-.288 1.056-1.23 1.338-1.65.282-.42.564-.348.954-.21.39.144 2.46 1.164 2.88 1.374.42.21.702.318.81.492.108.18.108 1.014-.282 2.112Z" />
      </svg>
    </a>
  );
}
