"use client";

import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "@/lib/translation-context";
import type { Language } from "@/lib/translations";

const languages: { code: Language; nativeName: string; name: string }[] = [
  { code: "en", nativeName: "English",  name: "English"  },
  { code: "hi", nativeName: "हिन्दी",   name: "Hindi"    },
  { code: "kn", nativeName: "ಕನ್ನಡ",    name: "Kannada"  },
  { code: "mr", nativeName: "मराठी",    name: "Marathi"  },
  { code: "te", nativeName: "తెలుగు",   name: "Telugu"   },
  { code: "ta", nativeName: "தமிழ்",    name: "Tamil"    },
];

export default function LanguageSelector() {
  const { language, setLanguage } = useTranslation();
  const current = languages.find((l) => l.code === language) ?? languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{current.nativeName}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={language === lang.code ? "bg-primary-50 font-semibold" : ""}
          >
            <div className="flex flex-col">
              <span className="font-medium">{lang.nativeName}</span>
              <span className="text-xs text-gray-500">{lang.name}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
