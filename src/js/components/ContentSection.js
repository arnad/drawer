export const ContentSection = ({ contentSectionHandler, children, back, display }) => {

  const sectionAnimation = back ? "contentSection slideOutRightContent" : "contentSection slideInRightContent";
  const stepKids         = children.props.children;
  const findBasicViews   = stepKids.filter(c => c.props.myKind === "BasicView");
  const findDetailViews  = stepKids.filter(c => c.props.myKind === "DetailView");
  const findDetailView   = findDetailViews.filter(c => c.props.id === display);

  return (
        <div className={sectionAnimation}>
          {!back && findBasicViews}
          {back  && findDetailView}
        </div>
      )
}
