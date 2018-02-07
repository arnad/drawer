import { Icon, Button } from '@pearson-components/elements-sdk/build/dist.elements-sdk';


export const TitleSection = ({ back, sectionTitle, iconClose, titleSectionHandler }) => {

  const backSpanStyles  = back ? "titleSectionHeaderBackspan slideInLeftContent" : "titleSectionHeaderBackspan slideOutLeftContent";
  const titleSpanStyles = back ? "titleSectionHeaderTitleSpan slideOutRightContent" : "titleSectionHeaderTitleSpan slideInRightContent";

  return (
        <div className="titleSectionHeader">
          <span className={titleSpanStyles} onClick={titleSectionHandler}>
            <h1 className="titleSectionHeaderTitle">{sectionTitle}</h1>
          </span>
          <span tabIndex="0" className={backSpanStyles} onClick={titleSectionHandler}>
            <Button btnIcon><Icon name="chevron-back-18">Back</Icon>Back</Button>
          </span>
          <span className="iconWrapper" onClick={iconClose}>
            <Button btnIcon>
              <Icon name="remove-sm-24">close drawer</Icon>
            </Button>
          </span>
        </div>
      )

}
