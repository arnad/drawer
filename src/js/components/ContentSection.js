export const ContentSection = ({ contentSectionHandler, animate, children, back, display }) => {

  const sectionAnimationDetail = back ? "contentSection slideInLeftContent" : "contentSection slideOutLeftContent";
  const sectionAnimationBasic  = back ? "contentSection slideOutRightContent" : "contentSection slideInRightContent";
  const stepKids = children.props.children;
  const clickTo  = stepKids.filter(c => c.props.detailViewFor === display);

  console.log(display)
  console.log(clickTo)
  console.log(stepKids)

  return (
        <div className="contentSectionRoot" onClick={(e) => {contentSectionHandler(e.target.parentNode.attributes.value);console.log(e.target.parentNode.attributes)}}>
          <div className={sectionAnimationBasic}>
            {!back && stepKids.filter(c => c.type.name === "BasicView")}
            {back  && stepKids.filter(c => {(c.type.name === "DetailView") && (c.props.id === display)})}
          </div>
        </div>
      )
}
