export const ContentSection = (props) => {

  const { contentSectionHandler, animate, children, back } = props;
  const sectionAnimationDetail = back ? "contentSection slideInRightContent" : "contentSection slideOutRightContent";
  const sectionAnimationBasic  = back ? "contentSection slideOutRightContent" : "contentSection slideInRightContent";
  const stepKids = children.props.children;

  return (
        <div className="contentSectionRoot" onClick={contentSectionHandler}>
          {console.log(stepKids)}
          <div className={sectionAnimationBasic}>{stepKids.filter(c => c.type.name === "BasicView")}</div>
          <div className={sectionAnimationDetail}>{stepKids.filter(c => c.type.name === "DetailView")}</div>
        </div>
      )
}
