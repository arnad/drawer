export const ContentSection = ({ contentSectionHandler, children, back, displayView }) => {

  const sectionAnimation = back ? "contentSection slideOutRightContent" : "contentSection slideInRightContent";
  const stepKids         = React.Children.map(children.props.children, child => child);
  const findBasicViews   = stepKids.filter(c => c.props.myKind === "BasicView");
  const findDetailViews  = stepKids.filter(c => c.props.myKind === "DetailView");
  const findDetailView   = findDetailViews.filter(c => c.props.id === displayView);

  return (
        <ul className={sectionAnimation}>
          {!back && findBasicViews}
          { back && findDetailView}
        </ul>
      )

}
