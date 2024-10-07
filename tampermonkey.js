// ==UserScript==
// @name         SAP Community CSS Modifier
// @namespace    http://tampermonkey.net/
// @version      v0.1.2
// @description  Modify layout and styling on SAP Community pages
// @author       Marian
// @homepage     https://github.com/marianfoo/sap-community-css/blob/main/tampermonkey.js
// @updateURL    https://raw.githubusercontent.com/marianfoo/sap-community-css/main/tampermonkey.js
// @downloadURL  https://raw.githubusercontent.com/marianfoo/sap-community-css/main/tampermonkey.js
// @match        https://community.sap.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create a style element to hold the custom CSS
    const style = document.createElement('style');
    style.type = 'text/css';

    // Insert the provided CSS into the style element
    style.innerHTML = `
        #boardmanagementtaplet {
            display: none !important;
        }

        .lia-quilt-column.lia-quilt-column-08.lia-quilt-column-right.lia-quilt-column-side-content {
            display: none !important;
        }

        @media (min-width: 1024px) {
            .lia-quilt-column-16,
            .lia-quilt-view-profile-hero .lia-quilt-column-profile-hero-center {
                width: 100% !important;
            }
        }

        @media (min-width: 1024px) {
            .lia-quilt-column-08,
            .KudosLeaderboardPage .TopUsersLeaderBoard .UserSearchItemContainer,
            .lia-user-search-results-list-container > .UserSearchItemContainer,
            .TkbPage .lia-tkb-article-entry {
                width: 100% !important;
            }
        }

        p {
            margin: 0 0 7px !important;
        }

        #producttaglist {
            display: none !important;
        }

        .AddMessageTags.lia-message-tags.lia-component-message-view-widget-tags {
            display: none !important;
        }

        #kudosButtonV2 {
            margin-top: unset !important;
        }

        #bodyDisplay {
            margin-bottom: unset !important;
        }

        .lia-quilt-column-alley.lia-quilt-column-alley-right {
            display: flex;
            justify-content: right;
            flex-direction: row-reverse;
            font-size: small;
        }

        .lia-quilt-notification-feed-item .lia-quilt-column-alley.lia-quilt-column-alley-right {
            display: block;
            justify-content: initial;
            flex-direction: initial;
            font-size: initial;
            margin: initial;
        }

        .lia-quilt-column.lia-quilt-column-16.lia-quilt-column-right.lia-quilt-column-message-footer-right {
            width: 100% !important;
            .lia-quilt-column-alley.lia-quilt-column-alley-right {
                text-align: center !important;
                .footer-top {
                    width: 100% !important;
                }
            }
        }
    `;

    // Append the style element to the document
    document.head.appendChild(style);
})();
