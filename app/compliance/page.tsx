"use client";

import Link from "next/link";
import { I18nextProvider } from "react-i18next";
import i18n, { useTranslation } from "../lib/i18n";
import LanguageSwitcher from "../components/LanguageSwitcher";

function ComplianceContent() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      <header className="border-b border-emerald-100 bg-white/80 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="MenoDAO" className="h-9 w-9" />
            <span className="font-bold text-lg text-gray-900 font-outfit">
              MenoDAO
            </span>
          </Link>
          <LanguageSwitcher />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-outfit">
          {t("compliance.title")}
        </h1>
        <div className="mt-8 space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>{t("compliance.intro")}</p>
          <p>{t("compliance.kes")}</p>
          <p className="font-semibold text-gray-900">{t("compliance.noCrypto")}</p>
          <p>{t("compliance.commitment")}</p>
        </div>
        <Link
          href="/"
          className="inline-block mt-10 text-emerald-700 hover:text-emerald-800 font-semibold underline underline-offset-4"
        >
          {t("compliance.backHome")}
        </Link>
      </main>
    </div>
  );
}

export default function CompliancePage() {
  return (
    <I18nextProvider i18n={i18n}>
      <ComplianceContent />
    </I18nextProvider>
  );
}
