import { TablePlanColorText } from '@/Constant/color_table_plan';
import React from 'react'


{/* 
 Aria Expanded True = -
 Aria Expanded False = +

*/}

export interface TablePlanModel {
    id?: number;
    lang_code?: string;
    title_trigger?: string;
    title_feature?: string;
    page_code?: string;
    title_tooltip?: string;
    is_showTooltip?: boolean;
    title_verified?: string;
    title_verifiedTooltip?: null;
    title_colorVerified?: string;
    title_volunteer?: string;
    title_volunteerTooltip?: null;
    title_colorVolunteer?: string;
    title_functional?: string;
    title_functionalTooltip?: null;
    title_colorFunctional?: string;
    title_professional?: string;
    title_professionalTooltip?: null;
    title_colorProfessional?: string;
    is_publ?: boolean;
    submit_type?: number;
    createdAt?: Date;
    updatedAt?: Date;
}


export default function TableChildrenMD({ data }: { data: TablePlanModel[] }) {
    return (
        <>
            <table className="table mb-0">
                <thead className="thead-title">
                    <tr>
                        <th>
                            &nbsp;
                        </th>
                        <th className="td-value">
                            Verified
                        </th>
                        <th className="td-value">
                            Volunteer
                        </th>
                        <th className="td-value">
                            Functional
                        </th>
                        <th className="td-value">
                            Professional
                        </th>
                    </tr>
                </thead>
            </table>

            <div className="table-sm-container">
                <h4 className="table-toggle-title collapsed" data-toggle="collapse" data-target="#table-sm-1" aria-expanded="true">
                    <i className="far fa-plus-circle"></i>
                    <i className="far fa-minus-circle"></i>
                    <span>
                        GENERAL
                    </span>
                </h4>
                <div className="collapse show" id="table-sm-1">
                    {data.map((item, index) => (
                        <>
                            {item.title_trigger === "General" || item.title_trigger === "general" ? <table className="table mb-0" key={index}>
                                <tbody>
                                    <tr>
                                        <td>
                                            {item.title_feature}
                                            {item.is_showTooltip ? <i className="fas fa-question-circle" data-toggle="tooltip" title={item.title_tooltip}></i> : null}
                                        </td>
                                        <td className="td-value">
                                            {item.title_verified}
                                        </td>
                                        <td className="td-value">
                                            {item.title_volunteer}
                                        </td>
                                        <td className="td-value">
                                            {item.title_functional} <br />
                                            /user/month
                                        </td>
                                        <td className="td-value">
                                            {item.title_professional}<br />
                                            /user/month
                                        </td>

                                    </tr>
                                </tbody>
                            </table> : null}
                        </>
                    ))}
                </div>
            </div>

            <div className="table-sm-container">
                <h4 className="table-toggle-title" data-toggle="collapse" data-target="#table-sm-2" aria-expanded="true">
                    <i className="far fa-plus-circle"></i>
                    <i className="far fa-minus-circle"></i>
                    <span>
                        CRM MODULE
                    </span>
                </h4>
                <div className="collapse show" id="table-sm-2">
                    {data.map((item, index) =>
                        <>
                            {item.title_trigger === "CRM Module" ? <table className="table mb-0" key={index}>
                                <tbody>
                                    <tr>
                                        <td>
                                            Product Management
                                            <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                        </td>
                                        <td className={`td-value ${TablePlanColorText(item.title_verified as string)} `}>
                                            {item.title_verified}
                                        </td>
                                        <td className={`td-value ${TablePlanColorText(item.title_volunteer as string)}`}>
                                            {item.title_volunteer}
                                        </td>
                                        <td className={`td-value ${TablePlanColorText(item.title_functional as string)}`}>
                                            {item.title_functional}
                                        </td>
                                        <td className={`td-value ${TablePlanColorText(item.title_professional as string)}`}>
                                            {item.title_professional}
                                        </td>
                                    </tr>

                                </tbody>
                            </table> : null}
                        </>
                    )}

                </div>
            </div>

            <div className="table-sm-container">
                <h4 className="table-toggle-title" data-toggle="collapse" data-target="#table-sm-3" aria-expanded="true">
                    <i className="far fa-plus-circle"></i>
                    <i className="far fa-minus-circle"></i>
                    <span>
                        SRM MODULE
                    </span>
                </h4>
                <div className="collapse show" id="table-sm-3">
                    {data.map((item, index) =>
                        <>
                            {item.title_trigger === "SRM Module" ? <table className="table mb-0" key={index}>
                                <tbody>
                                    <tr>
                                        <td>
                                            Product Management
                                            <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                        </td>
                                        <td className={`td-value ${TablePlanColorText(item.title_verified as string)} `}>
                                            {item.title_verified}
                                        </td>
                                        <td className={`td-value ${TablePlanColorText(item.title_volunteer as string)}`}>
                                            {item.title_volunteer}
                                        </td>
                                        <td className={`td-value ${TablePlanColorText(item.title_functional as string)}`}>
                                            {item.title_functional}
                                        </td>
                                        <td className={`td-value ${TablePlanColorText(item.title_professional as string)}`}>
                                            {item.title_professional}
                                        </td>
                                    </tr>

                                </tbody>
                            </table> : null}
                        </>
                    )}
                </div>
            </div>

            <div className="table-sm-container">
                <h4 className="table-toggle-title" data-toggle="collapse" data-target="#table-sm-4" aria-expanded="true">
                    <i className="far fa-plus-circle"></i>
                    <i className="far fa-minus-circle"></i>
                    <span>
                        IWM MODULE
                    </span>
                </h4>
                <div className="collapse show" id="table-sm-4">
                    {data.map((item, index) =>
                        <>
                            {item.title_trigger === "IWM Module" ? <table className="table mb-0" key={index}>
                                <tbody>
                                    <tr>
                                        <td>
                                            Product Management
                                            <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                        </td>
                                        <td className={`td-value ${TablePlanColorText(item.title_verified as string)} `}>
                                            {item.title_verified}
                                        </td>
                                        <td className={`td-value ${TablePlanColorText(item.title_volunteer as string)}`}>
                                            {item.title_volunteer}
                                        </td>
                                        <td className={`td-value ${TablePlanColorText(item.title_functional as string)}`}>
                                            {item.title_functional}
                                        </td>
                                        <td className={`td-value ${TablePlanColorText(item.title_professional as string)}`}>
                                            {item.title_professional}
                                        </td>
                                    </tr>

                                </tbody>
                            </table> : null}
                        </>
                    )}
                </div>
            </div>

            <div className="my-4">
                <dl className="dl-note">
                    <dt>*</dt>
                    <dd>Limited for referral transaction only</dd>

                    <dt>**</dt>
                    <dd>Limited for 50 business partners</dd>
                </dl>
            </div>

        </>
    )
}
