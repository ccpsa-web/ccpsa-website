import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: CCPSA Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">CCPSA</h3>
            <div className="text-sm space-y-2">
              <p>Critical Care, Pulmonary & Sleep Associates</p>
              <p className="mt-4">
                <strong>Address:</strong><br />
                274 Union Blvd, Suite 200<br />
                Lakewood, CO 80228
              </p>
              <p className="mt-2">
                <strong>Phone:</strong><br />
                (303) 951-0600
              </p>
              <p className="mt-2">
                <strong>Fax:</strong><br />
                (303) 951-0605
              </p>
              <p className="mt-2">
                <strong>Email:</strong><br />
                <a href="mailto:info@critcareMD.com" className="hover:text-amber transition-colors">
                  info@critcareMD.com
                </a>
              </p>
            </div>

            {/* Review Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.yelp.com/biz/critical-care-pulmonary-and-sleep-associates-lakewood"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                <Image
                  src="/images/site/yelp-find-us.png"
                  alt="Find us on Yelp"
                  width={80}
                  height={40}
                  className="h-8 w-auto"
                />
              </a>
              <a
                href="https://search.google.com/local/writereview?placeid=ChIJm65QNAeEa4cR_BQi4xZN_x0"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                <Image
                  src="/images/site/google-review-us.jpg"
                  alt="Review us on Google"
                  width={80}
                  height={40}
                  className="h-8 w-auto rounded"
                />
              </a>
            </div>
          </div>

          {/* Column 2: Our Care */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Care</h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/critical-care" className="hover:text-amber transition-colors">
                  Critical Care
                </Link>
              </li>
              <li>
                <Link href="/pulmonary-services" className="hover:text-amber transition-colors">
                  Pulmonary
                </Link>
              </li>
              <li>
                <Link href="/interventional-pulmonary" className="hover:text-amber transition-colors">
                  Interventional
                </Link>
              </li>
              <li>
                <Link href="/sleep-medicine" className="hover:text-amber transition-colors">
                  Sleep
                </Link>
              </li>
              <li>
                <Link href="/neurocritical-care" className="hover:text-amber transition-colors">
                  Neurocritical
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: For Patients */}
          <div>
            <h3 className="font-bold text-lg mb-4">For Patients</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  href="https://mountain.mycommonspirit.org/MCH/Authentication/Login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber transition-colors"
                >
                  Patient Portal
                </a>
              </li>
              <li>
                <Link href="/patient-forms" className="hover:text-amber transition-colors">
                  Patient Forms
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-amber transition-colors">
                  Privacy Practices
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-amber transition-colors">
                  Clinical Research
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber transition-colors">
                  Find a Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: About */}
          <div>
            <h3 className="font-bold text-lg mb-4">About</h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/our-team" className="hover:text-amber transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/for-physicians" className="hover:text-amber transition-colors">
                  For Physicians
                </Link>
              </li>
              <li>
                <Link href="/join-our-team" className="hover:text-amber transition-colors">
                  Join Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-blue pt-6 text-sm text-center space-y-2">
          <p className="text-amber font-semibold">HIPAA Privacy Notice</p>
          <p>&copy; {new Date().getFullYear()} Critical Care, Pulmonary & Sleep Associates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
