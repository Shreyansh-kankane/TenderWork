import React from "react";
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CTab,
  CTabContent,
  CTabList,
  CTabPanel,
  CTabs,
  CForm,
  CFormLabel,
  CFormInput,
  CFormTextarea,
} from "@coreui/react";
import { DocsExample } from "src/components";

function OngoingProjects() {
  return (
    <CTabs activeItemKey="profile">
      <CTabList variant="tabs">
        <CTab itemKey="home">Home</CTab>
        <CTab itemKey="boq">BOQ</CTab>
        <CTab itemKey="deductions">Deductions</CTab>
        <CTab itemKey="accounts">Accounts</CTab>
        <CTab itemKey="material-expenses">Material Expenses</CTab>
        <CTab itemKey="labour-expenses">Labour Expenses</CTab>
        <CTab itemKey="rental-expenses">Rental Expenses</CTab>
        <CTab itemKey="other-expenses">Other Expenses</CTab>
      </CTabList>
      <CTabContent>
        <CTabPanel className="p-3" itemKey="home">
          Home tab content
        </CTabPanel>
        <CTabPanel className="p-3" itemKey="boq">
          <CForm>
            <div className="mb-3">
              <CFormLabel htmlFor="exampleFormControlInput1">
                Email address
              </CFormLabel>
              <CFormInput
                type="email"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="exampleFormControlTextarea1">
                Example textarea
              </CFormLabel>
              <CFormTextarea
                id="exampleFormControlTextarea1"
                rows={3}
              ></CFormTextarea>
            </div>
          </CForm>
        </CTabPanel>
        <CTabPanel className="p-3" itemKey="contact">
          Contact tab content
        </CTabPanel>
      </CTabContent>
    </CTabs>
  );
}

export default OngoingProjects;
