import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/LegalLayout";
import {
  APP_NAME,
  CONTACT_EMAIL,
  PRIVACY_URL,
  SUPPORT_EMAIL,
} from "@/lib/constants";
import {
  ACCOUNT_DELETION_TEXT,
  SUBSCRIPTION_LEGAL_TEXT,
} from "@/lib/plans";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of use for ${APP_NAME}.`,
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service">
      <p>
        Last updated: June 2024. These Terms of Service (&quot;Terms&quot;) govern your use of
        the {APP_NAME} mobile application and website operated by {APP_NAME}.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By creating an account or using {APP_NAME}, you agree to these Terms. If you do not
        agree, do not use the service.
      </p>

      <h2>2. The Service</h2>
      <p>
        {APP_NAME} helps you save recipes from social media, websites, and images; plan meals;
        build grocery lists; and use AI-powered recipe tools. Features and availability may
        change as we improve the product.
      </p>

      <h2>3. Accounts</h2>
      <p>
        You are responsible for maintaining the security of your account credentials. You must
        provide accurate information when registering and keep your account details up to date.
      </p>

      <h2>4. Subscriptions &amp; Billing</h2>
      <p>{SUBSCRIPTION_LEGAL_TEXT}</p>
      <p>
        Premium subscriptions are processed through the Apple App Store.
        Refund requests must be submitted through the store where you purchased. For billing
        questions, contact{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>

      <h2>5. Free Plan Limits</h2>
      <p>
        The free plan includes unlimited collections, meal plans, and grocery lists. Premium-gated
        features (social imports, link imports, image/text imports, and AI features) include a
        limited number of free uses per feature before a Premium subscription is required.
      </p>

      <h2>6. User Content</h2>
      <p>
        You retain ownership of recipes and content you save in {APP_NAME}. You grant us a
        license to store, process, and display your content solely to provide the service,
        including AI features you request.
      </p>

      <h2>7. Acceptable Use</h2>
      <p>You agree not to misuse the service, attempt unauthorized access, or use {APP_NAME} in
        violation of applicable law.</p>

      <h2>8. Termination</h2>
      <p>
        You may delete your account at any time from Settings in the app. {ACCOUNT_DELETION_TEXT}
      </p>

      <h2>9. Disclaimer</h2>
      <p>
        {APP_NAME} is provided &quot;as is&quot; without warranties of any kind. AI-generated
        recipes and suggestions are for informational purposes — always verify ingredients,
        especially for allergies and dietary needs.
      </p>

      <h2>10. Contact</h2>
      <p>
        For questions about these Terms, contact us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. See our{" "}
        <Link href={PRIVACY_URL}>Privacy Policy</Link> for how we handle your data.
      </p>
    </LegalLayout>
  );
}
