import React from 'react';
import { Icon, Button } from '@pearson-components/elements-sdk/build/dist.elements-sdk';


export const TitleSection = ({ back, iconClose, backHandler, text }) => {

  const backSpanStyles  = back ? "titleSectionHeaderBackspan slideInRightContent" : "titleSectionHeaderBackspan slideOutLeftContent";
  const titleSpanStyles = back ? "titleSectionHeaderTitleSpan slideInRightContent" : "titleSectionHeaderTitleSpan slideOutLeftContent";

  return (
        <div className="titleSectionHeader">
          {!back && <span className={titleSpanStyles}>
                      <h1 className="titleSectionHeaderTitle">{text.headerTitle}</h1>
                    </span>}
          { back && <span className={backSpanStyles} onClick={backHandler}>
                      <Button btnIcon>
                        <Icon name="chevron-back-18"/>
                        {text.backButtonText}
                      </Button>
                    </span>}
          <span className="iconWrapper" onClick={iconClose}>
            <Button btnIcon aria-label={text.closeButtonSRText}>
              <Icon name="remove-sm-24"/>
            </Button>
          </span>
        </div>
      )

}
