import { Icon, Button } from '@pearson-components/elements-sdk/build/dist.elements-sdk';


export const TitleSection = ({ back, iconClose, titleSectionHandler, text }) => {

  const backSpanStyles  = back ? "titleSectionHeaderBackspan slideOutRightContent" : "titleSectionHeaderBackspan slideInRightContent";
  const titleSpanStyles = back ? "titleSectionHeaderTitleSpan slideOutRightContent" : "titleSectionHeaderTitleSpan slideInRightContent";

  return (
        <div className="titleSectionHeader">
          {!back && <span className={titleSpanStyles} onClick={titleSectionHandler}>
                      <h1 className="titleSectionHeaderTitle">{text.headerTitle}</h1>
                    </span>}
          { back && <span tabIndex='0' className={backSpanStyles} onClick={titleSectionHandler}>
                      <Button btnIcon>
                        <Icon name="chevron-back-18">{text.backButtonSRText}</Icon>
                        {text.backButtonText}
                      </Button>
                    </span>}
          <span className="iconWrapper" onClick={iconClose}>
            <Button btnIcon>
              <Icon name="remove-sm-24">{text.closeButtonSRText}</Icon>
            </Button>
          </span>
        </div>
      )

}
