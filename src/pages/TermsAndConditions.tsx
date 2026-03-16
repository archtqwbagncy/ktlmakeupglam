import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">
            Terms & <span className="text-gradient-gold">Conditions</span>
          </h1>
          <div className="w-24 h-1 bg-primary rounded-full mt-4 mb-10"></div>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">1. Booking & Deposits</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  A <strong className="text-foreground">40% non-refundable deposit</strong> of the total service fee is required to secure your booking.
                </li>
                <li>
                  Your booking is only confirmed once the deposit has been received.
                </li>
                <li>
                  The remaining balance is due <strong className="text-foreground">after the service</strong> has been completed.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">2. Cancellations & Refunds</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Deposits are <strong className="text-foreground">non-refundable</strong> under any circumstances.
                </li>
                <li>
                  If you cancel your booking, the deposit will be forfeited.
                </li>
                <li>
                  KTL Makeup Glam reserves the right to cancel a booking if full payment terms are not met.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">3. Date Changes & Rescheduling</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  You may <strong className="text-foreground">change your booking date</strong> subject to availability — your deposit will carry over to the new date.
                </li>
                <li>
                  Date changes must be communicated at least <strong className="text-foreground">48 hours</strong> before the original appointment.
                </li>
                <li>
                  Failure to notify us within 48 hours may result in forfeiture of the deposit.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">4. Late Arrivals & No-Shows</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  If you are more than 30 minutes late without prior notice, KTL Makeup Glam reserves the right to cancel the appointment. The deposit will not be refunded.
                </li>
                <li>
                  No-shows will result in full forfeiture of the deposit.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">5. Travel Service</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  An additional travel fee applies for on-location services and will be communicated at the time of booking.
                </li>
                <li>
                  The travel fee is included in the total amount from which the 40% deposit is calculated.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">6. Allergies & Skin Sensitivity</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Please inform us of any allergies or skin sensitivities prior to your appointment.
                </li>
                <li>
                  KTL Makeup Glam is not liable for any allergic reactions if the client fails to disclose relevant information.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">7. Photography & Social Media</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  KTL Makeup Glam may photograph completed looks for portfolio and social media purposes unless the client requests otherwise.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">8. General</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  By booking with KTL Makeup Glam, you acknowledge and agree to these terms and conditions.
                </li>
                <li>
                  KTL Makeup Glam reserves the right to update these terms at any time.
                </li>
              </ul>
            </div>

            <p className="text-sm pt-4 border-t border-border">
              Last updated: March 2026
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
