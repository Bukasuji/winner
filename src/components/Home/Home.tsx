import { memo, useState} from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Home.module.css';
import { Polygon1Icon } from './Polygon1Icon.js';
import LoginModal from '../LoginModal/LoginModal';
import RegModal from '../RegisterModal/RegisterModal'
import { getAuth,signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase'


interface Props {
  className?: string;
}
/* @figmaId 1:2 */
export const Home: FC<Props> = memo(function Home(props = {}) {

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleLoginModalClose = () => {
    setIsLoginModalOpen(false);
  };

  const handleLogin = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in successfully
        const user = userCredential.user;
        console.log('Signed in user:', user);
        alert(`The user ${email} is successfully signed in.`);
        setIsLoggedIn(true);
        // You can add your navigation logic or state updates here

      })
      .catch((error) => {
        // Handle sign-in errors
        console.error('Sign-in error:', error);
        // You can display an error message to the user
      });
  };

  const [isRegModalOpen, setIsRegModalOpen] = useState(false);

 

  const handleRegModalClose = () => {
    setIsRegModalOpen(false);
  };

  const handleReg = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User registered successfully
        const user = userCredential.user;
        console.log('Registered user:', user);
        alert(`The user ${email} is registered successfully.`);
        // You can add your navigation logic or state updates here
      })
      .catch((error) => {
        // Handle registration errors
        console.error('Registration error:', error);
        // You can display an error message to the user
      });
  };

  const handleRegClick = () => {
    setIsRegModalOpen(true);
  };

  const handleLogoutClick = () => {
    signOut(auth)
      .then(() => {
        // Successfully signed out
        setIsLoggedIn(false); // Update the isLoggedIn state
        // You can add any additional logic after logout here
        alert('You have succesfully logged out.'); 
      })
      .catch((error) => {
        // Handle logout errors
        console.error('Logout error:', error);
        // You can display an error message to the user if needed
      });
  };
  

  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame14}></div>
      <div className={classes.dragLeftOrRight}>Drag left or right</div>
      <div className={classes.rectangle1}></div>
      <div className={classes.welcomeTo}>Welcome to</div>
      <div className={classes.fAITHTABERNACLE}>FAITH TABERNACLE</div>
      <div className={classes.iCTGROUP}>ICT GROUP</div>
      <div className={classes.frame6}>
        <div className={classes.jOINUSTODAY}>JOIN US TODAY</div>
      </div>
      <div className={classes.frame11}>
        <div className={classes.frame7}>
          <div className={classes.frame8}>
            <div className={classes.iCTAPPLICATION}>
              <div className={classes.textBlock}>ICT </div>
              <div className={classes.textBlock2}>APPLICATION</div>
            </div>
          </div>
          <div className={classes.frame9}>
            <div className={classes.generalApplicationOfInformatio}>
              <div className={classes.textBlock3}>General Application of Information</div>
              <div className={classes.textBlock4}>Technology for the automation of </div>
              <div className={classes.textBlock5}>Kingdom Advancement endeavours</div>
            </div>
          </div>
        </div>
        <div className={classes.frame82}>
          <div className={classes.frame83}>
            <div className={classes.sATELLITEBROADCAST}>
              <div className={classes.textBlock6}>SATELLITE </div>
              <div className={classes.textBlock7}>BROADCAST</div>
            </div>
          </div>
          <div className={classes.frame92}>
            <div className={classes.oneOfTheThingsWeDoIsRenderingO}>
              One of the things we do is rendering of live broadcast to various Winners’ Satellite Centers across the
              globe
            </div>
          </div>
        </div>
        <div className={classes.frame93}>
          <div className={classes.frame84}>
            <div className={classes.iNTERNETSTREAMING}>
              <div className={classes.textBlock8}>INTERNET</div>
              <div className={classes.textBlock9}>STREAMING</div>
            </div>
          </div>
          <div className={classes.frame94}>
            <div className={classes.weAlsoStreamLiveServicesOnTheW}>
              We also stream live services on the web via Youtube, FT websites, Mobile Apps, Facebooks, Twitter and
              Instagram
            </div>
          </div>
        </div>
        <div className={classes.frame95}>
          <div className={classes.frame85}>
            <div className={classes.aUTOMATION}>
              <div className={classes.textBlock10}>AUTO</div>
              <div className={classes.textBlock11}>MATION</div>
            </div>
          </div>
          <div className={classes.frame96}>
            <div className={classes.weRunAutomationOfKingdomBasedI}>
              We run Automation of Kingdom based initiatives and operations. This is to enhance the flow of Kingdom
              growth and advancement
            </div>
          </div>
        </div>
        <div className={classes.frame10}>
          <div className={classes.frame86}>
            <div className={classes.cYBERCENTERSERVICES}>
              <div className={classes.textBlock12}>CYBER CENTER</div>
              <div className={classes.textBlock13}>SERVICES</div>
            </div>
          </div>
          <div className={classes.frame97}>
            <div className={classes.weRunCyberCafeServicesDuringSh}>
              We run Cyber Cafe services during Shiloh, IYAC, and other major church programs so as to meet the internet
              connectivity needs.
            </div>
          </div>
        </div>
      </div>
      <div className={classes.frame12}>
        <div className={classes.dedicatedToServingGod}>Dedicated to Serving God</div>
        <div className={classes.weReCommittedToServingGODAndTh}>
          We’re committed to serving GOD and the interest of his kingdom
        </div>
        <div className={classes.areYouASoftwareEngineerOrANetw}>
          <div className={classes.textBlock14}>
            Are you a software engineer or a network satellite engineer willing to
          </div>
          <div className={classes.textBlock15}>serve God and the interest of his kingdom? Please submit your</div>
          <div className={classes.textBlock16}>application online.</div>
        </div>
        <div className={classes.withinTheGroupYouWillBeAbleToL}>
          <div className={classes.textBlock17}>
            Within the group, you will be able to leverage on your core strengths
          </div>
          <div className={classes.textBlock18}>to serve the Lord in either the Hardware Sub-Group or Software</div>
          <div className={classes.textBlock19}>Sub-Group.</div>
        </div>
        <div className={classes.frame62}>
          <div className={classes.clickHereToREGISTER}>Click Here to REGISTER</div>
        </div>
        <div className={classes.frame13}></div>
      </div>
      <div className={classes.frame23}>
        <div className={classes.frame15}>
          <div className={classes.frame16}></div>
          <div className={classes.understandingTheWondersOfThank}>
            <div className={classes.textBlock20}>Understanding</div>
            <div className={classes.textBlock21}>The Wonders of</div>
            <div className={classes.textBlock22}>Thanksgiving</div>
          </div>
          <div className={classes.frame17}></div>
          <div className={classes.bishopDavidOyedepo}>Bishop David Oyedepo</div>
        </div>
        <div className={classes.frame162}>
          <div className={classes.frame163}></div>
          <div className={classes.pathwaysToAccessingImpartation}>
            <div className={classes.textBlock23}>Pathways to Accessing</div>
            <div className={classes.textBlock24}>Impartation of the Spirit</div>
            <div className={classes.textBlock25}>of Faith</div>
          </div>
          <div className={classes.frame172}></div>
          <div className={classes.bishopDavidOyedepo2}>Bishop David Oyedepo</div>
        </div>
        <div className={classes.frame173}>
          <div className={classes.frame164}></div>
          <div className={classes.propheticWarningToTheEndTimeCh}>
            <div className={classes.textBlock26}>Prophetic Warning to </div>
            <div className={classes.textBlock27}>The End Time</div>
            <div className={classes.textBlock28}>Church</div>
          </div>
          <div className={classes.frame174}></div>
          <div className={classes.bishopDavidAbioye}>Bishop David Abioye</div>
        </div>
        <div className={classes.frame18}>
          <div className={classes.frame165}></div>
          <div className={classes.theMeeknessFactorInTheSchoolOf}>
            <div className={classes.textBlock29}>The Meekness Factor</div>
            <div className={classes.textBlock30}>in the School of</div>
            <div className={classes.textBlock31}>Exploit</div>
          </div>
          <div className={classes.frame175}></div>
          <div className={classes.pastorFolorunsho}>Pastor Folorunsho</div>
        </div>
        <div className={classes.frame19}>
          <div className={classes.frame166}></div>
          <div className={classes.unveilingTheFoundationOfEveryG}>
            <div className={classes.textBlock32}>Unveiling The</div>
            <div className={classes.textBlock33}>Foundation of Every</div>
            <div className={classes.textBlock34}>Great Destiny</div>
          </div>
          <div className={classes.frame176}></div>
          <div className={classes.bishopDavidOyedepo3}>Bishop David Oyedepo</div>
        </div>
        <div className={classes.frame20}>
          <div className={classes.frame167}></div>
          <div className={classes.whoIsOnTheLordSSide}>
            <div className={classes.textBlock35}>Who is on the</div>
            <div className={classes.textBlock36}>Lord’s Side</div>
          </div>
          <div className={classes.frame177}></div>
          <div className={classes.bishopDavidOyedepo4}>Bishop David Oyedepo</div>
        </div>
        <div className={classes.frame21}>
          <div className={classes.frame168}></div>
          <div className={classes.engagingThePowerOfFaithForFulf}>
            <div className={classes.textBlock37}>Engaging The Power</div>
            <div className={classes.textBlock38}>of Faith for Fulfilment</div>
            <div className={classes.textBlock39}>of Prophecy</div>
          </div>
          <div className={classes.frame178}></div>
          <div className={classes.bishopDavidOyedepo5}>Bishop David Oyedepo</div>
        </div>
        <div className={classes.frame22}>
          <div className={classes.frame169}></div>
          <div className={classes.welcomeChargeCrossOverService}>
            <div className={classes.textBlock40}>Welcome Charge /</div>
            <div className={classes.textBlock41}>Cross Over Service</div>
          </div>
          <div className={classes.frame179}></div>
          <div className={classes.bishopDavidAbioye2}>Bishop David Abioye</div>
        </div>
      </div>
      <div className={classes.frame24}>
        <div className={classes.frame33}>
          <div className={classes.frame29}>
            <div className={classes.frame25}>
              <div className={classes.frame30}>
                <div className={classes.sacrifice}>Sacrifice</div>
                <div className={classes.sacrificeIsAnotherCoreValueWeH}>
                  <div className={classes.textBlock42}>Sacrifice is another Core Value we hold. It takes sacrifice</div>
                  <div className={classes.textBlock43}>and selflessness to really serve GOD wholeheartedly.</div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.frame302}>
            <div className={classes.frame252}>
              <div className={classes.frame303}>
                <div className={classes.diligence}>Diligence</div>
                <div className={classes.hardWorkAlwaysPaysInWinnersCha}>
                  Hard work always pays. In Winners’ Chapel ICT Group, there is no room for laziness. Diligence in one
                  of our core values.
                </div>
              </div>
            </div>
          </div>
          <div className={classes.frame31}>
            <div className={classes.frame253}>
              <div className={classes.frame304}>
                <div className={classes.spirituality}>Spirituality</div>
                <div className={classes.oneOfOurCoreValuesIsSpirituali}>
                  One of our core values is spirituality. In order to serve GOD and get rewarded, you have to be
                  spiritually minded.
                </div>
              </div>
            </div>
          </div>
          <div className={classes.frame32}>
            <div className={classes.frame254}>
              <div className={classes.frame305}>
                <div className={classes.creativity}>Creativity</div>
                <div className={classes.creativityIsOneOfOurCoreValues}>
                  Creativity is one of our core values. We are creative in all we do.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.gospelMessages}>Gospel Messages</div>
      <div className={classes.ourCoreValues}>Our Core Values</div>
      <div className={classes.frame51}>
        <div className={classes.frame52}>
          <div className={classes.copyright2022AllRightReserved}>Copyright © 2022. All right reserved. Designed by Okoro Jeremiah, ICTG_Test </div>
        </div>
        <div className={classes.winnersChapelLogoPng21}></div>
        <div className={classes.frame53}>
          <div className={classes.locationAddressKM10IdirokoRoad}>
            <div className={classes.textBlock44}>Location Address : KM, 10, Idiroko Road,</div>
            <div className={classes.textBlock45}>Canaanland ota, ogun state, nigeria.</div>
          </div>
          <div className={classes.emailContactLfcictgroupCom}>Email: contact@lfcictgroup.com</div>
          <div className={classes.phone2348035693820}>Phone: +2348035693820</div>
          <div className={classes.contactUs}>Contact Us</div>
        </div>
        <div className={classes.frame54}>
          <div className={classes.livestream}>livestream</div>
          <div className={classes.photoGallery}>photo gallery</div>
          <div className={classes.latestNews}>latest news</div>
          <div className={classes.hardware}>hardware</div>
          <div className={classes.software}>Software</div>
          <div className={classes.worksActivities}>Works/activities</div>
        </div>
      </div>
      <div className={classes.dragLeftOrRight2}>Drag left or right</div>
      <div className={classes.frame1}>
        <div className={classes.frame4}>
          <div className={classes.winnersChapelLogoPng212}></div>
        </div>
        <div className={classes.frame2}>
          <div className={classes.home}>Home</div>
          <div className={classes.aboutUs}>About us</div>
          <div className={classes.projects}>Projects</div>
          <div className={classes.liveServices}>Live Services</div>
          <div className={classes.bFC}>BFC</div>
          <div className={classes.wOFBI}>WOFBI</div>
          <div className={classes.contactUs2}>Contact us</div>
          {/* Conditionally render login/logout button based on isLoggedIn */}
        {isLoggedIn ? (
          <div className={classes.contactUs2} onClick={handleLogoutClick}>Logout </div>
        ) : (
          <div className={classes.contactUs2} onClick={handleLoginClick}>Login </div>
        )}
          <LoginModal isOpen={isLoginModalOpen} onClose={handleLoginModalClose} onLogin={handleLogin} />
          <div className={classes.register} onClick={handleRegClick}>Register</div>
          <RegModal isOpen={isRegModalOpen} onClose={handleRegModalClose} onReg={handleReg} />
        </div>
        
        <div className={classes.frame5}>
          <div className={classes.polygon1}>
            <Polygon1Icon className={classes.icon} />
          </div>
          <div className={classes.lIVESERVICE}>LIVE SERVICE</div>
        </div>

        
      </div>
    </div>
  );
});
