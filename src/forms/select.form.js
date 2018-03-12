import React, { Component } from 'react';
import './select.form.css';

class SelectForm extends Component {

    render() {
        return (
            <div className="dashboard-section">
                <h2>Start E-Filing</h2>

                <div id="steps" className="small-steps">
                    <ol>
                        <li className="small-steps"><span className="step-circle in-progress small-steps">1</span><span className="step-title in-progress small-steps">Select form</span></li>
                        <li className="small-steps"><span className="step-circle future small-steps">2</span><span className="step-title future small-steps">Complete form</span></li>
                        <li className="small-steps"><span className="step-circle future small-steps">3</span><span className="step-title future small-steps">Pay</span></li>
                        <li className="small-steps"><span className="step-circle future small-steps">4</span><span className="step-title future small-steps">Submit</span></li>
                        <li className="small-steps"><span className="step-circle future small-steps">5</span><span className="step-title future small-steps">Notfications</span></li>
                    </ol>
                </div>
                
                <table id="forms-table">
                <tbody>
                    <tr>
                        <td>Are you starting an Appeal?</td>
                        <td className="left-bordered">Are you responding to an Appeal?</td>
                    </tr>
                    <tr>
                        <td>COA FORMS FOR APPELANTS</td>
                        <td className="left-bordered">CAO FORMS FOR RESPONDANTS</td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <table><tbody><tr>
                                    <td>
                                        Right to Appeal <i class="fa fa-question-circle" aria-hidden="true" title="Start appeal without court's permission"></i>
                                        <ul>
                                            <li><a id="form7" href="/forms/form.7.html" target="_self">Notice of Appeal (Form-7)</a></li>
                                            <li>Affidavit of Service <i className="far fa-file"></i> <i className="far fa-file-pdf"></i></li>
                                        </ul>
                                    </td>
                                    <td>
                                        Leave to Appeal <i class="fa fa-question-circle" aria-hidden="true" title="with court's permission"></i>
                                        <ul>
                                            <li>Notice of Application for Leave to Appeal (Form-1)</li>
                                        </ul>
                                    </td>
                                </tr></tbody></table>
                            </div>
                        </td>
                        <td className="left-bordered">
                            <div>
                                <table><tbody><tr>
                                    <td>
                                        Right to Appeal <i class="fa fa-question-circle" aria-hidden="true" title="Start appeal without court's permission"></i>
                                        <ul>
                                            <li><a id="form2" href="/forms/form.2.html" target="_self">Notice of Appearance (Form-2)</a>&nbsp;</li>
                                        </ul>
                                    </td>
                                    <td>
                                        Leave to Appeal <i class="fa fa-question-circle" aria-hidden="true" title="with court's permission"></i>
                                        <ul>
                                            <li><a id="form2" href="/forms/form.2.html" target="_self">Notice of Appearance (Form-2)</a>&nbsp;</li>
                                        </ul>
                                    </td>
                                </tr></tbody></table>
                            </div>
                        </td>
                    </tr>
                </tbody>
                </table>                
            </div>
        )
    }
}
export default SelectForm;