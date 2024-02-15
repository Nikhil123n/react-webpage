import Programs from "./Programs";
import Figure from "./Figure";
import Figure1 from "./Figure1";
import "./FutureDoctors.css";

const FutureDoctors = () => {
  return (
    <section className="future-doctors">
      <div className="s-4">
        <Programs
          certificatePrograms="Competitions"
          experienceGlobalLearning="Learn and compete with a"
          participateInProjectsAndB="global peer group. Win at a"
          networksGlobally="global stage."
          cERTIFICATES="COMPETITIONS"
          propGap="284px"
          propMinWidth="229px"
          propWidth="562px"
          propMinWidth1="562px"
        />
        <div className="divfusion-layout-column1">
          <Figure
            whatsAppImage20230714At10="/whatsappimage20230714at125555amjpeg-1@2x.png"
            futureMUNLeadersByTheHarv="The Leadership Competition by th…"
            becomingABestDelegateASte="Learn leadership skills from Harvard stud…"
            rightArrowsvg="/rightarrowsvg-9.svg"
            propPadding="var(--padding-18xl) var(--padding-3xs)"
            propAlignSelf="stretch"
            propFlex="1"
          />
          <Figure
            whatsAppImage20230714At10="/906241-830545776975015-583285608404393633-o1536x965jpg@2x.png"
            futureMUNLeadersByTheHarv="The Wolves of Wall Street Compet…"
            becomingABestDelegateASte="Harvard Student Agencies presents – Th…"
            rightArrowsvg="/rightarrowsvg-9.svg"
            propPadding="var(--padding-18xl) var(--padding-3xs)"
            propAlignSelf="stretch"
            propFlex="1"
          />
          <Figure1
            whatsAppImage20230714At12="/feature400x60011jpg@2x.png"
            futureLawyersProgramByHar="The HUCEG Sustainability Leader…"
            useThePowerOfLawToBringAb="Kick start your sustainability journey with…"
            rightArrowsvg="/rightarrowsvg-9.svg"
            propPadding="var(--padding-18xl) var(--padding-3xs)"
            propAlignSelf="stretch"
            propFlex="1"
          />
        </div>
      </div>
    </section>
  );
};

export default FutureDoctors;
