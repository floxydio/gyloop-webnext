import Link from 'next/link'

export default function TableChildrenSM() {
    return (
        <>


            <div className="table-sm-container">
                <h4 className="table-toggle-title" data-toggle="collapse" data-target="#table-sm-1" aria-expanded="true">
                    <i className="far fa-plus-circle"></i>
                    <i className="far fa-minus-circle"></i>
                    <span>
                        GENERAL
                    </span>
                </h4>
                <div className="collapse show" id="table-sm-1">
                    <table className="table mb-0">
                        <tbody>
                            <tr>
                                <td>
                                    Subscription fee
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value">
                                    FREE
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Prerequisite registration
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value">
                                    Referral Code
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Connect to Gyloop Networks
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-danger">
                                    No
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Connect to third party systems
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-danger">
                                    No
                                </td>
                            </tr><tr>
                                <td>
                                    Connect to third party systems
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-danger">
                                    No
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Multi company
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-danger">
                                    No
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Advance Configurable
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-danger">
                                    No
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
                    <table className="table mb-0">
                        <tbody>
                            <tr>
                                <td>
                                    Product Management
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-success">
                                    Yes
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Pricing Management
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-warning">
                                    Limited*
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Catalog Management
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-warning">
                                    Limited*
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Account Management
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-warning">
                                    Limited*
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Calendar
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-danger">
                                    No
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Pipeline Management
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-danger">
                                    No
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Quotation
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-warning">
                                    Limited*
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Proposal
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-warning">
                                    Limited*
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Contract
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-warning">
                                    Limited*
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Sales Processing
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-warning">
                                    Limited*
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Delivery Processing
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-warning">
                                    Limited*
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Billing Processing
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-warning">
                                    Limited*
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Collection Processing
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-danger">
                                    No
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Multi Sales Organization
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-danger">
                                    No
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Sales Return
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-warning">
                                    Limited*
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Sales Workflow
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-danger">
                                    No
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
                    <table className="table mb-0">
                        <tbody>
                            <tr>
                                <td>
                                    Product Management
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-success">
                                    Yes
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Pricing Management
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-warning">
                                    Limited*
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Catalog Management
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-warning">
                                    Limited*
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Vendor Management
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-warning">
                                    Limited*
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Calendar
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-danger">
                                    No
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Puchase Requisition
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-success">
                                    Yes
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Request for Quotation
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-warning">
                                    Limited*
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Self Service Procurement
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-danger">
                                    No
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    E-Procurement
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-danger">
                                    No
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Contract
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-warning">
                                    Limited*
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Purchase Processing
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-warning">
                                    Limited*
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Delivery Processing
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-warning">
                                    Limited*
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Invoice Processing
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-warning">
                                    Limited*
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Payment Processing
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-danger">
                                    No
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Multi Purchasing Organization
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-danger">
                                    No
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Purchase Return
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-warning">
                                    Limited*
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Purchase Workflow
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-warning">
                                    Limited*
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
                    <table className="table mb-0">
                        <tbody>
                            <tr>
                                <td>
                                    Product Management
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-success">
                                    Yes
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Catalog Management
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-success">
                                    Yes
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Delivery Processing
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-success">
                                    Yes
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Shipment
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-danger">
                                    No
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Reservation
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-success">
                                    Yes
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Product Receipt
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-success">
                                    Yes
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Product Issue
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-success">
                                    Yes
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Product Transfer
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-success">
                                    Yes
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Stock Monitoring
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-success">
                                    Yes
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Stock Valuation
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-success">
                                    Yes
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Packaging
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-danger">
                                    No
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Batch Management
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-success">
                                    Yes
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Serial Number
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-success">
                                    Yes
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Reorder Point
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-danger">
                                    No
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Consignment
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-danger">
                                    No
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Vendor Manage Inventory
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-danger">
                                    No
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Stock Taking
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-success">
                                    Yes
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Block Stock
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-success">
                                    Yes
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Quality Inspection Stock
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-danger">
                                    No
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Barcode Label
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-success">
                                    Yes
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Bin Shelving
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-danger">
                                    No
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Picking Processing
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-danger">
                                    No
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Multi Warehouse
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-success">
                                    Yes
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Product Movement Workflow
                                    <i className="fas fa-question-circle" data-toggle="tooltip" title="Tooltip Content"></i>
                                </td>
                                <td className="td-value text-danger">
                                    No
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    &nbsp;
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <Link href="/SubscribeVerified" className="btn btn-primary btn-block gyloop-btn mt-n1 mb-3">Register Now</Link>
                </div>
            </div>


        </>
    )
}
