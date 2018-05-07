import React from 'react';
import { Icon, Button } from '@pearson-components/elements-sdk/build/dist.elements-sdk';


export const TitleSection = ({ back, iconClose, backHandler, text }) => {

  const backButtonStyles = back ? "titleSectionHeaderBackButton slideInRightContent" : "titleSectionHeaderBackButton slideOutLeftContent";
  const titleSpanStyles  = back ? "titleSectionHeaderTitleSpan slideInRightContent"  : "titleSectionHeaderTitleSpan slideOutLeftContent";

  return (
        <div className="titleSectionHeader">
          {!back && <span className={titleSpanStyles}>
                      <h1 className="titleSectionHeaderTitle">{text.headerTitle}</h1>
                    </span>}
          { back && <button className={backButtonStyles} onClick={backHandler}>
                      <Icon name="chevron-back-18"/>
                      {text.backButtonText}
                    </button>}
          <span className="iconWrapper" onClick={iconClose}>
            <Button btnIcon aria-label={text.closeButtonSRText}>
              <Icon name="remove-sm-24"/>
            </Button>
          </span>
        </div>
      )

}
