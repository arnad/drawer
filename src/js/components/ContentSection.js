export const ContentSection = ({ contentSectionHandler, children, back, display }) => {

  const sectionAnimationDetail = back ? "contentSection slideInLeftContent" : "contentSection slideOutLeftContent";
  const sectionAnimationBasic  = back ? "contentSection slideOutRightContent" : "contentSection slideInRightContent";
  const stepKids               = children.props.children;
  const findBasicViews         = stepKids.filter(c => c.type.name === "BasicView");
  const findDetailViews        = stepKids.filter(c => c.type.name === "DetailView");
  const findDetailView         = findDetailViews.filter(c => c.props.id === display);
  const clickHandler           = (e) => {!back && contentSectionHandler(e.target.parentNode.attributes['maptodetail'].value)};

  return (
        <div className="contentSectionRoot" onClick={clickHandler}>
          <div className={sectionAnimationBasic}>
            {!back && findBasicViews}
            {back  && findDetailView}
          </div>
        </div>
      )
}
