import "./Other.scss";
import OtherSwip from "./OtherSwip";


function Other({arrayOther}) {
  return (
    <div className="other_wrapper">
      <h2 className="project__title">Other</h2>
<OtherSwip arrayOther={arrayOther} />
    </div>
  );
}

export default Other;
