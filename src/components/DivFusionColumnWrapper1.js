import Programs from "./Programs";
import Figure1 from "./Figure1";
import Figure from "./Figure";
import "./DivFusionColumnWrapper1.css";

const DivFusionColumnWrapper1 = () => {
  return (
    <section className="div-fusion-column-wrapper">
      <div className="s-3">
        <Programs
          certificatePrograms="Certificate Programs"
          experienceGlobalLearning="Experience global learning,"
          participateInProjectsAndB="participate in projects and build"
          networksGlobally="networks globally."
          cERTIFICATES="CERTIFICATES"
        />
        <div className="divfusion-layout-column">
          <div className="figure2">
            <img className="ai-ml-1jpg-icon" alt="" src="/aiml1jpg@2x.png" />
            <div className="student-name">
              <div className="ai-and-ml">AI and ML Bootcamp</div>
            </div>
            <div className="small2">
              <div className="cultivate-your-acumen">
                Cultivate your acumen in Python, Artificia…
              </div>
            </div>
            <img
              className="right-arrowsvg-icon3"
              alt=""
              src="/rightarrowsvg-3.svg"
            />
          </div>
          <Figure1
            whatsAppImage20230714At12="/whatsappimage20230714at125555amjpeg@2x.png"
            futureLawyersProgramByHar="Future Lawyers’ Program by Harv…"
            useThePowerOfLawToBringAb="Use the power of  law to bring about a p…"
            rightArrowsvg="/rightarrowsvg-3.svg"
          />
          <Figure1
            whatsAppImage20230714At12="/pexelspixabay1393921536x1024jpg@2x.png"
            futureLawyersProgramByHar="Harvard Model Congress Young L…"
            useThePowerOfLawToBringAb="A life-changing 2-Week Virtual Program f…"
            rightArrowsvg="/rightarrowsvg-3.svg"
            propPadding="var(--padding-19xl) var(--padding-3xs) var(--padding-19xl) var(--padding-4xs)"
            propAlignSelf="unset"
            propFlex="unset"
          />
          <Figure1
            whatsAppImage20230714At12="/ent21jpg@2x.png"
            futureLawyersProgramByHar="Future Entrepreneurs Program by …"
            useThePowerOfLawToBringAb="Who Said Start-Ups Are Only For Grown-…"
            rightArrowsvg="/rightarrowsvg-3.svg"
            propPadding="var(--padding-19xl) var(--padding-3xs) var(--padding-19xl) var(--padding-4xs)"
            propAlignSelf="unset"
            propFlex="unset"
          />
          <Figure1
            whatsAppImage20230714At12="/whatsappimage20230714at125208am1jpeg@2x.png"
            futureLawyersProgramByHar="World Debate Stars with the Harv…"
            useThePowerOfLawToBringAb="A Unique and Intensive 2-Weekend Progr…"
            rightArrowsvg="/rightarrowsvg-3.svg"
            propPadding="var(--padding-19xl) var(--padding-3xs) var(--padding-19xl) var(--padding-4xs)"
            propAlignSelf="unset"
            propFlex="unset"
          />
          <Figure
            whatsAppImage20230714At10="/whatsappimage20230714at10028am1536x1025jpeg@2x.png"
            futureMUNLeadersByTheHarv="Future MUN Leaders by the Harva…"
            becomingABestDelegateASte="Becoming a Best Delegate: A Step by Ste…"
            rightArrowsvg="/rightarrowsvg-3.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default DivFusionColumnWrapper1;
