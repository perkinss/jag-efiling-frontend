import React, { Component }from 'react';
import Help from './common/Help';
import {
    FILE_MULTIPLES_STEP_TWO_MSG,
    FILE_ONLINE_ONE_MSG,
    FILE_STEP_ONE_MSG,
    FILE_STEP_THREE_MSG,
    FILE_STEP_TWO_MSG
} from "../../helpers/constants";

class ApplyForLeavePopup extends Component {

    constructor(props) {
        super(props);
        let NoticeOfAppeal = [
            {
                line: FILE_ONLINE_ONE_MSG,
                rows: [
                    { descriptionLink: {
                            URL: "https://www.courtofappealbc.ca/appellant-guidebook/2.1-how-do-you-start-an-appeal?ct=t(step-index-link)",
                            URLName: "Notice of Application for Leave to Appeal"
                        }, times: "4 x",
                        docLink: {
                            URL: "http://www.courts.gov.bc.ca/Court_of_Appeal/practice_and_procedure/Forms/Form%201.docx",
                            URLName: "DOC"
                        },
                        pdfLink: {
                            URL: "http://www.courts.gov.bc.ca/Court_of_Appeal/practice_and_procedure/Forms/fillable_forms/civil_rules_forms/Form1.pdf",
                            URLName: "PDF"
                        }

                    }
                ]
            },
            FILE_MULTIPLES_STEP_TWO_MSG,
            FILE_STEP_THREE_MSG
        ];

        let ProofOfService = [
            {
                line: FILE_STEP_ONE_MSG,
                rows: [
                    { descriptionLink: {
                            URL: "https://www.courtofappealbc.ca/appellant-guidebook/2.2-what-do-you-prepare-if-you-have-an-automatic-right-to-appeal?ct=t(step-index-link)",
                            URLName: "Proof of Service"
                        }, times: "1 x",
                        docLink: {
                            URL: "http://www.courts.gov.bc.ca/Court_of_Appeal/practice_and_procedure/Forms/Affidavit%20of%20Service.docx",
                            URLName: "DOC"
                        },
                        pdfLink: {
                            URL: "http://www.courts.gov.bc.ca/Court_of_Appeal/practice_and_procedure/Forms/Affidavit%20of%20Service.pdf",
                            URLName: "PDF"
                        }
                    }
                 ]
            },
            FILE_STEP_TWO_MSG,
            FILE_STEP_THREE_MSG
        ];

        this.sections = [{
            expandable: true,
            expanded: false,
            sectionHeading: "Notice of Application for Leave to Appeal",
            iconSrc: "/icons/icon-share.svg",
            iconClass: "info-modal-icon",
            deadlinePhrase: {startWith: "File the document below ", endWith: " of the decision you want to appeal."},
            deadline: " within 30 days ",
            lineHeight: '201px',
            last: false,
            contentMap: NoticeOfAppeal
        },{
            expandable: true,
            expanded: false,
            sectionHeading: "Proof of Service",
            iconSrc: "/icons/icon-share.svg",
            iconClass: "info-modal-icon",
            deadlinePhrase: {startWith: "File Proof of Service ", endWith: " of serving all respondents."},
            deadline: " within 10 days ",
            last: false,
            contentMap: ProofOfService
        }]
    }

    render() {

        let sections = this.props.getSections(this.sections);
        return (
            <div id="info-modal" className="modal" style={{display: 'block'}} >
                <div className="info-modal-title ">
                    <span id="close-modal" onClick={this.props.close}>&times;</span>
                    Initial Documents
                </div>
                <div className="info-modal-content">
                    <div className="info-modal-primary-heading row">
                        <div className="col-lg-offset-1 col-md-11 col-sm-11 col-lg-11 col-md-offset-1 col-sm-offset-1">
                            Do you need to apply for the court's permission to appeal?</div>
                    </div>
                    {sections}
                    <Help
                        URL="https://www.courtofappealbc.ca/appellant-guidebook"
                        URLName="Visit: SRL Guidebook"
                    />
                </div>

            </div>
        );
    }

}
export default ApplyForLeavePopup;