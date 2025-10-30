import { TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-primary-glow">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="h-6 w-6 text-accent" />
              <span className="text-xl font-bold">FinAX</span>
            </div>
            <p className="text-primary-foreground/80">
              Professional stock services for modern investors.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#services" className="hover:text-accent transition-colors">Demat</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Mutual Fund</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Insurance</a></li>

            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link to="/privacy-policy" className="hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>

              <li><a href="#" className="hover:text-accent transition-colors">Disclaimer</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-glow/30 pt-8 text-center text-primary-foreground/70">

          <div className="disclaimer" style={{ fontSize: '28px' }}><b>Disclaimer</b></div>
<p style={{textAlign:'left', marginBottom:'8px'}}>Disclosure of FinAX : FinAX is a comprehensive financial platform offering expert services across every segment- from the stock market to mutual fund and beyond.
  We proudly operate as a franchise partner with reputed financial companies to bring you the best investment opportunities and guidance.
  Before joining FinAX, we encourage you to get complete information or simply call or message our support team for personalized assistance.."</p>

          <p>
            <h1 style={{textAlign:'left', marginBottom:'14px',fontSize:'18px'}}>Product Disclaimers</h1>
            <li>
              <ul style={{textAlign:'left'}}>
                Equity: Investments in securities market are subject to market risks, read all the related documents carefully before investing. Please read the SEBI prescribed Combined Risk Disclosure Document prior to investing.
              </ul>
              <li>
              <ul style={{textAlign:'left', marginBottom:'14px'}}>
                Futures and Options (derivatives): Derivatives are a sophisticated investment device. The investor is requested to take into consideration all the risk factors before actually trading in derivative contracts.
              </ul>
              </li>
            </li>

<h1 style={{textAlign:'left', marginBottom:'14px', fontSize:'18px ', fontStyle:'inherit'}}>Risk Disclosure on Derivatives</h1>

<p style={{
  textAlign:'left'}}>


 <li>9 out of 10 individual traders in equity Futures and Options Segment, incurred net losses.</li>
  <li>On an average, loss makers registered net trading loss close to ₹ 50,000.</li>
  <li>Over and above the net trading losses incurred, loss makers expended an additional 28% of net trading losses as transaction costs.</li>
  <li>Those making net trading profits, incurred between 15% to 50% of such profits as transaction cost</li>


</p>

          </p>


          <p style={{
            textAlign:'left', marginTop:'12px',marginBottom:'12px'
          }}>DND / TRAI related: Please note that by submitting details you are authorizing FinAX (or its authorized/group entities) to send you any communications through any modes, including but limited to in the form of messages, voice calls, through any digital means/channels including WhatsApp, Telegram, Instagram, Messenger, any over-the-top communication services etc. even if you are registered under DND (Do not Disturb). Please also note that communications with FinAX representatives may be recorded for internal quality and training purposes</p>

<p style={{textAlign:'left'}}>ATTENTION INVESTORS : "KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary". "Prevent Unauthorized Transactions in yourdemat account: Update your Mobile Number with your Depository Participant. Receive alerts on your Registered Mobile for all debit and other important transactions in your demat account directly from NSDL on the same day"."No need to issue cheques by investors while subscribing to IPO. Just write the bank account number and sign in the application form to authorise your bank to make payment in case of allotment. No worries for refund as the money remains in investor's account".</p>

          <p>&copy; 2025 FinAX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
