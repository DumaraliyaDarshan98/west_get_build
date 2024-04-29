"use strict";
(self["webpackChunkwestgate"] = self["webpackChunkwestgate"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _utility_shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility/shared/components/login/login.component */ 8351);
/* harmony import */ var _utility_shared_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility/shared/components/forgot-password/forgot-password.component */ 7427);
/* harmony import */ var _utility_shared_components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility/shared/components/reset-password/reset-password.component */ 8877);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);






const routes = [{
  path: 'boss-user',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/bos-user/bos-user.module */ 6475)).then(m => m.BOSUserModule)
}, {
  path: 'supplier-admin',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/supplier-admin/supplier-admin.module */ 6377)).then(m => m.SupplierAdminModule)
}, {
  path: 'feasibility-user',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/feasibility-analyst/feasibility-analyst.module */ 8022)).then(m => m.FeasibilityModule)
}, {
  path: 'login',
  component: _utility_shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: 'forgot-password',
  component: _utility_shared_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordComponent
}, {
  path: 'reset-password',
  component: _utility_shared_components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_2__.ResetPasswordComponent
}, {
  path: '**',
  pathMatch: 'full',
  redirectTo: 'login'
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class AppComponent {
  constructor() {
    this.title = 'westgate';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _utility_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility/shared/shared.module */ 7313);
/* harmony import */ var _modules_bos_user_bos_user_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/bos-user/bos-user.module */ 6475);
/* harmony import */ var _utility_shared_components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utility/shared/components/reset-password/reset-password.component */ 8877);
/* harmony import */ var _utility_shared_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utility/shared/components/forgot-password/forgot-password.component */ 7427);
/* harmony import */ var _utility_shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utility/shared/components/login/login.component */ 8351);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _utility_interceptor_ApiInterceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utility/interceptor/ApiInterceptor */ 6306);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _modules_feasibility_analyst_feasibility_analyst_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/feasibility-analyst/feasibility-analyst.module */ 8022);
/* harmony import */ var _modules_supplier_admin_supplier_admin_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/supplier-admin/supplier-admin.module */ 6377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);



















class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS,
      useClass: _utility_interceptor_ApiInterceptor__WEBPACK_IMPORTED_MODULE_7__.APIInterceptor,
      multi: true
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _modules_bos_user_bos_user_module__WEBPACK_IMPORTED_MODULE_3__.BOSUserModule, _modules_feasibility_analyst_feasibility_analyst_module__WEBPACK_IMPORTED_MODULE_8__.FeasibilityModule, _modules_supplier_admin_supplier_admin_module__WEBPACK_IMPORTED_MODULE_9__.SupplierAdminModule, _utility_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.NoopAnimationsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_16__.ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: false
    })]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _utility_shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_6__.LoginComponent, _utility_shared_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__.ForgotPasswordComponent, _utility_shared_components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__.ResetPasswordComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _modules_bos_user_bos_user_module__WEBPACK_IMPORTED_MODULE_3__.BOSUserModule, _modules_feasibility_analyst_feasibility_analyst_module__WEBPACK_IMPORTED_MODULE_8__.FeasibilityModule, _modules_supplier_admin_supplier_admin_module__WEBPACK_IMPORTED_MODULE_9__.SupplierAdminModule, _utility_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.NoopAnimationsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_16__.ToastrModule]
  });
})();

/***/ }),

/***/ 2565:
/*!*************************************************************!*\
  !*** ./src/app/modules/bos-user/bos-user-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BOSUserRoutingModule: () => (/* binding */ BOSUserRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _boss_user_home_boss_user_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boss-user-home/boss-user-home.component */ 5214);
/* harmony import */ var _boss_user_add_project_boss_user_add_project_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boss-user-add-project/boss-user-add-project.component */ 3543);
/* harmony import */ var _boss_user_live_project_listing_boss_user_live_project_listing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boss-user-live-project-listing/boss-user-live-project-listing.component */ 7383);
/* harmony import */ var _boss_user_view_project_boss_user_view_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boss-user-view-project/boss-user-view-project.component */ 3018);
/* harmony import */ var _bos_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bos-user.component */ 4992);
/* harmony import */ var _mail_screenshot_add_edit_mail_screenshot_add_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mail-screenshot-add-edit/mail-screenshot-add-edit.component */ 2676);
/* harmony import */ var _fio_document_list_fio_document_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fio-document-list/fio-document-list.component */ 6533);
/* harmony import */ var _fio_document_add_edit_fio_document_add_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fio-document-add-edit/fio-document-add-edit.component */ 4267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);











const routes = [{
  path: '',
  component: _bos_user_component__WEBPACK_IMPORTED_MODULE_4__.BOSUserComponent,
  children: [{
    path: "home",
    component: _boss_user_home_boss_user_home_component__WEBPACK_IMPORTED_MODULE_0__.BossUserHomeComponent
  }, {
    path: "add-project",
    component: _boss_user_add_project_boss_user_add_project_component__WEBPACK_IMPORTED_MODULE_1__.BossUserAddProjectComponent
  }, {
    path: "project-list",
    component: _boss_user_live_project_listing_boss_user_live_project_listing_component__WEBPACK_IMPORTED_MODULE_2__.BossUserLiveProjectListingComponent
  }, {
    path: "view-project",
    component: _boss_user_view_project_boss_user_view_project_component__WEBPACK_IMPORTED_MODULE_3__.BossUserViewProjectComponent
  }, {
    path: "foi-document-list",
    component: _fio_document_list_fio_document_list_component__WEBPACK_IMPORTED_MODULE_6__.FioDocumentListComponent
  }, {
    path: "foi-document-add",
    component: _fio_document_add_edit_fio_document_add_edit_component__WEBPACK_IMPORTED_MODULE_7__.FioDocumentAddEditComponent
  }, {
    path: "mail-screenhot-add",
    component: _mail_screenshot_add_edit_mail_screenshot_add_edit_component__WEBPACK_IMPORTED_MODULE_5__.MailScreenshotAddEditComponent
  }]
}, {
  path: "**",
  pathMatch: "full",
  redirectTo: ""
}];
class BOSUserRoutingModule {
  static #_ = this.ɵfac = function BOSUserRoutingModule_Factory(t) {
    return new (t || BOSUserRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: BOSUserRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](BOSUserRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 4992:
/*!********************************************************!*\
  !*** ./src/app/modules/bos-user/bos-user.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BOSUserComponent: () => (/* binding */ BOSUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_utility_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utility/shared/components/header/header.component */ 8976);



class BOSUserComponent {
  static #_ = this.ɵfac = function BOSUserComponent_Factory(t) {
    return new (t || BOSUserComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BOSUserComponent,
    selectors: [["app-bos-user"]],
    decls: 2,
    vars: 0,
    template: function BOSUserComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header")(1, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, src_app_utility_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 6475:
/*!*****************************************************!*\
  !*** ./src/app/modules/bos-user/bos-user.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BOSUserModule: () => (/* binding */ BOSUserModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _bos_user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bos-user-routing.module */ 2565);
/* harmony import */ var _bos_user_bos_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bos-user/bos-user.component */ 4992);
/* harmony import */ var _boss_user_home_boss_user_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boss-user-home/boss-user-home.component */ 5214);
/* harmony import */ var _boss_user_live_project_listing_boss_user_live_project_listing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boss-user-live-project-listing/boss-user-live-project-listing.component */ 7383);
/* harmony import */ var _boss_user_add_project_boss_user_add_project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./boss-user-add-project/boss-user-add-project.component */ 3543);
/* harmony import */ var _boss_user_view_project_boss_user_view_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./boss-user-view-project/boss-user-view-project.component */ 3018);
/* harmony import */ var src_app_utility_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utility/shared/shared.module */ 7313);
/* harmony import */ var src_app_utility_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/utility/shared/components/header/header.component */ 8976);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-pagination */ 1060);
/* harmony import */ var _fio_document_list_fio_document_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fio-document-list/fio-document-list.component */ 6533);
/* harmony import */ var _fio_document_add_edit_fio_document_add_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fio-document-add-edit/fio-document-add-edit.component */ 4267);
/* harmony import */ var _mail_screenshot_add_edit_mail_screenshot_add_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mail-screenshot-add-edit/mail-screenshot-add-edit.component */ 2676);
/* harmony import */ var _boss_user_upload_project_boss_user_upload_project_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./boss-user-upload-project/boss-user-upload-project.component */ 9965);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var src_app_utility_shared_pop_ups_view_document_view_document_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/utility/shared/pop-ups/view-document/view-document.component */ 8713);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 1699);


















class BOSUserModule {
  static #_ = this.ɵfac = function BOSUserModule_Factory(t) {
    return new (t || BOSUserModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
    type: BOSUserModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _bos_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.BOSUserRoutingModule, src_app_utility_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_15__.NgxPaginationModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](BOSUserModule, {
    declarations: [_bos_user_bos_user_component__WEBPACK_IMPORTED_MODULE_1__.BOSUserComponent, _boss_user_home_boss_user_home_component__WEBPACK_IMPORTED_MODULE_2__.BossUserHomeComponent, _boss_user_live_project_listing_boss_user_live_project_listing_component__WEBPACK_IMPORTED_MODULE_3__.BossUserLiveProjectListingComponent, _boss_user_add_project_boss_user_add_project_component__WEBPACK_IMPORTED_MODULE_4__.BossUserAddProjectComponent, _boss_user_view_project_boss_user_view_project_component__WEBPACK_IMPORTED_MODULE_5__.BossUserViewProjectComponent, src_app_utility_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__.HeaderComponent, _fio_document_list_fio_document_list_component__WEBPACK_IMPORTED_MODULE_8__.FioDocumentListComponent, _fio_document_add_edit_fio_document_add_edit_component__WEBPACK_IMPORTED_MODULE_9__.FioDocumentAddEditComponent, _mail_screenshot_add_edit_mail_screenshot_add_edit_component__WEBPACK_IMPORTED_MODULE_10__.MailScreenshotAddEditComponent, _boss_user_upload_project_boss_user_upload_project_component__WEBPACK_IMPORTED_MODULE_11__.BossUserUploadProjectComponent, src_app_utility_shared_pop_ups_view_document_view_document_component__WEBPACK_IMPORTED_MODULE_12__.ViewDocumentComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _bos_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.BOSUserRoutingModule, src_app_utility_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_15__.NgxPaginationModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModule]
  });
})();

/***/ }),

/***/ 3543:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/bos-user/boss-user-add-project/boss-user-add-project.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BossUserAddProjectComponent: () => (/* binding */ BossUserAddProjectComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_project_service_project_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/project-service/project.service */ 1887);
/* harmony import */ var src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/notification/notification.service */ 6610);






class BossUserAddProjectComponent {
  constructor(route, projectService, notificationService, router) {
    this.route = route;
    this.projectService = projectService;
    this.notificationService = notificationService;
    this.router = router;
    this.addEditProjectForm = {
      projectName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
      BOSID: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
      publishDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.getCurrentDate(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
      website: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
      category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
      industry: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
      link: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
      periodOfContractStart: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
      periodOfContractEnd: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
      value: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
      projectType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
      mailID: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
      clientType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
      clientName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
      submission: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("12/9/2002", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
      dueDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("12/9/2001", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required)
    };
    this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup(this.addEditProjectForm);
    this.showLoader = false;
    this.projectId = '';
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.projectId = params['id'];
    });
    if (this.projectId && this.projectId.length) {
      this.patchProjectValue();
    }
  }
  patchProjectValue() {
    this.projectService.getProjectDetailsById(this.projectId).subscribe(response => {
      this.productForm.patchValue(response.data[0]);
    }, error => {
      this.notificationService.showError(error?.message);
      this.showLoader = false;
    });
  }
  getCurrentDate() {
    const currentDate = new Date();
    return currentDate.toISOString().substring(0, 10);
  }
  // Submit form
  submitForm() {
    this.showLoader = true;
    let payload = {
      data: this.productForm.value
    };
    if (this.projectId) {
      this.projectService.editProject(this.projectId, this.productForm.value).subscribe(response => {
        if (response.status) {
          this.router.navigate(['/boss-user/project-list']);
        } else {
          this.notificationService.showError(response?.message);
          this.showLoader = false;
        }
      }, error => {
        this.notificationService.showError(error?.message);
        this.showLoader = false;
      });
    } else {
      this.projectService.addProject(payload).subscribe(response => {
        if (response?.status == true) {
          this.showLoader = false;
          this.router.navigate(['/boss-user/project-list']);
        } else {
          this.notificationService.showError(response?.message);
          this.showLoader = false;
        }
      }, error => {
        this.notificationService.showError(error?.message);
        this.showLoader = false;
      });
    }
  }
  static #_ = this.ɵfac = function BossUserAddProjectComponent_Factory(t) {
    return new (t || BossUserAddProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_project_service_project_service__WEBPACK_IMPORTED_MODULE_0__.ProjectService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: BossUserAddProjectComponent,
    selectors: [["app-boss-user-add-project"]],
    decls: 189,
    vars: 1,
    consts: [["id", "main"], [1, "container-fluid"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-lg-5", "col-xl-5", "col-12"], [1, "row", "mb-3"], ["for", "inputEmail3", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["formControlName", "projectName", "rows", "3", "cols", "100", 1, "form-control"], ["formControlName", "BOSID", "type", "text", 1, "form-control"], ["formControlName", "publishDate", "type", "text", "placeholder", "Auto Detect System Calendar", 1, "form-control"], [1, "col-4"], [1, "form-select"], [1, "row", "mt-2"], [1, "col-6"], ["formControlName", "website", 1, "form-select"], ["disabled", "", "selected", "", "hidden", "", "value", ""], ["value", "Proactis"], ["value", "FindmyTender"], ["value", "TendersDirect"], [1, "col-lg-7", "col-xl-7", "col-12"], [1, "col-lg-6", "col-xl-6", "col-12"], ["formControlName", "category", 1, "form-select"], ["formControlName", "industry", 1, "form-select"], ["for", "inputEmail3", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["formControlName", "description", "rows", "3", "cols", "100", 1, "form-control"], ["formControlName", "link", "type", "text", 1, "form-control"], ["formControlName", "periodOfContractStart", "type", "date", "placeholder", "Start Date", 1, "form-control"], ["formControlName", "periodOfContractEnd", "type", "date", "placeholder", "End Date", 1, "form-control"], ["formControlName", "value", "type", "number", 1, "form-control"], ["formControlName", "projectType", 1, "form-select"], ["value", "Development"], ["value", "Product"], ["value", "Service"], ["formControlName", "mailID", "type", "email", 1, "form-control"], [1, "row", "mt-5"], ["formControlName", "clientType", 1, "form-select"], ["value", "PublicSector"], ["value", "PrivateSector"], ["formControlName", "clientName", "type", "text", 1, "form-control"], [1, "row", "mt-4"], [1, "col-12", "text-end"], ["type", "submit", 1, "btn", "btn-primary"]],
    template: function BossUserAddProjectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "main", 0)(1, "section")(2, "div", 1)(3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function BossUserAddProjectComponent_Template_form_ngSubmit_3_listener() {
          return ctx.submitForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 5)(12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "BOS ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 5)(17, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Publish Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 5)(22, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Submission Due Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 7)(25, "div", 3)(26, "div", 11)(27, "select", 12)(28, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "03");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "04");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "05");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 11)(41, "select", 12)(42, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "MM");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Janury");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "February");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "March");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Aapril");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 11)(53, "select", 12)(54, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "YY");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 13)(59, "div", 14)(60, "select", 12)(61, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "03");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "04");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "05");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 14)(74, "select", 12)(75, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Minute");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "03");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "04");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "05");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "div", 5)(88, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 7)(91, "select", 15)(92, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "Website URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "Proactis");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "Find my Tender");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "Tenders Direct");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "div", 20)(101, "div", 3)(102, "div", 21)(103, "div", 5)(104, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 7)(107, "select", 22)(108, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109, "Select category");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 21)(111, "div", 5)(112, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "Industry");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "div", 7)(115, "select", 23)(116, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "Industry Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "div", 5)(119, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](122, "textarea", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "div", 3)(124, "div", 21)(125, "div", 5)(126, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](127, "Link to notice");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](129, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "div", 21)(131, "div", 5)(132, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](133, "Contract Period");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "div", 7)(135, "div", 3)(136, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](137, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](139, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "div", 3)(141, "div", 21)(142, "div", 5)(143, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](146, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "div", 21)(148, "div", 5)(149, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, "Project Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "div", 7)(152, "select", 31)(153, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](154, "Select Project Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](156, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](158, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](160, "Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "div", 5)(162, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163, "Mail ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](165, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](166, "div", 36)(167, "div", 21)(168, "div", 5)(169, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](170, "Client Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](171, "div", 7)(172, "select", 37)(173, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](174, "Select Client Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](176, "Public Sector");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](178, "Private Sector");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](179, "div", 21)(180, "div", 5)(181, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](182, "Client Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](183, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](184, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](185, "div", 41)(186, "div", 42)(187, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](188, "Publish");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.productForm);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 5214:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/bos-user/boss-user-home/boss-user-home.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BossUserHomeComponent: () => (/* binding */ BossUserHomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class BossUserHomeComponent {
  static #_ = this.ɵfac = function BossUserHomeComponent_Factory(t) {
    return new (t || BossUserHomeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BossUserHomeComponent,
    selectors: [["app-boss-user-home"]],
    decls: 25,
    vars: 0,
    consts: [[1, "body-welcome-page"], ["id", "main"], [1, "p-0"], [1, "container"], [1, "row", "align-items-center"], [1, "col-xl-6", "col-lg-6", "col-12", "desktop-pt200"], [1, "Heading-h1"], [1, "LinkList-nav"], ["routerLink", "/boss-user/project-list"], ["src", "assets/img/arrow-blue.png"], ["routerLink", "/boss-user/foi-document-list"], ["routerLink", "/boss-user/mail-screenhot-add"], [1, "col-lg-6", "col-xl-6", "col-12"], [1, "bosTeam-wrapper"], ["src", "assets/img/welcome-page-team.png"]],
    template: function BossUserHomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0)(1, "main", 1)(2, "section", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1", 6)(7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Welcome back!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7)(10, "li")(11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Upload the Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li")(15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Upload the FOI Docs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li")(19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Upload the screenshot of mail sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12)(23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 7383:
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/bos-user/boss-user-live-project-listing/boss-user-live-project-listing.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BossUserLiveProjectListingComponent: () => (/* binding */ BossUserLiveProjectListingComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utility/shared/constant/pagination.constant */ 7005);
/* harmony import */ var src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utility/shared/constant/payload.const */ 5557);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_project_service_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/project-service/project.service */ 1887);
/* harmony import */ var src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notification/notification.service */ 6610);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ 1060);










function BossUserLiveProjectListingComponent_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td")(18, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "td")(29, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BossUserLiveProjectListingComponent_tr_51_Template_a_click_29_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.projectDetails(item_r1 == null ? null : item_r1._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BossUserLiveProjectListingComponent_tr_51_Template_a_click_31_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.editProjectDetails(item_r1 == null ? null : item_r1._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.projectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.BOSID);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](8, 12, item_r1 == null ? null : item_r1.publishDate, "MM/dd/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.industry);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.website);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", item_r1 == null ? null : item_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](22, 15, item_r1 == null ? null : item_r1.createdAt, "MM/dd/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.dateDifference);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](27, 18, item_r1 == null ? null : item_r1.dueDate, "MM/dd/yyyy, h:mm a"));
  }
}
const _c0 = function (a0, a1, a2) {
  return {
    itemsPerPage: a0,
    currentPage: a1,
    totalItems: a2
  };
};
class BossUserLiveProjectListingComponent {
  constructor(projectService, notificationService, router) {
    this.projectService = projectService;
    this.notificationService = notificationService;
    this.router = router;
    this.showLoader = false;
    this.projectList = [];
    this.page = src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__.pagination.page;
    this.pagesize = src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__.pagination.itemsPerPage;
    this.totalRecords = src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__.pagination.totalRecords;
    this.currentDate = new Date();
    this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl();
  }
  ngOnInit() {
    this.myControl.valueChanges.subscribe(res => {
      let storeTest = res;
      this.searchText = res.toLowerCase();
    });
    this.getProjectList();
  }
  formatMilliseconds(milliseconds) {
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    return `${days} days`;
  }
  getProjectList() {
    this.showLoader = true;
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.keyword = this.searchText;
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.page = String(this.page);
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.limit = String(this.pagesize);
    this.projectService.getProjectList(src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList).subscribe(response => {
      this.projectList = [];
      this.totalRecords = 0;
      if (response?.status == true) {
        this.showLoader = false;
        this.projectList = response?.data?.data;
        console.log(this.projectList);
        this.projectList.forEach(project => {
          const dueDate = new Date(project.dueDate);
          const currentDate = new Date();
          const dateDifference = Math.abs(dueDate.getTime() - currentDate.getTime());
          const formattedDateDifference = this.formatMilliseconds(dateDifference);
          this.dateDifference = formattedDateDifference;
        });
      } else {
        this.notificationService.showError(response?.message);
        this.showLoader = false;
      }
    }, error => {
      this.notificationService.showError(error?.message);
      this.showLoader = false;
    });
  }
  searchtext() {
    this.showLoader = true;
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.keyword = this.searchText;
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.page = String(this.page);
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.limit = String(this.pagesize);
    console.log(src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList);
    this.projectService.getProjectList(src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList).subscribe(response => {
      this.projectList = [];
      this.totalRecords = 0;
      if (response?.status == true) {
        this.showLoader = false;
        this.projectList = response?.data?.data;
        console.log(this.projectList);
        this.projectList.forEach(project => {
          const dueDate = new Date(project.dueDate);
          const currentDate = new Date();
          const dateDifference = Math.abs(dueDate.getTime() - currentDate.getTime());
          const formattedDateDifference = this.formatMilliseconds(dateDifference);
          this.dateDifference = formattedDateDifference;
        });
      } else {
        this.notificationService.showError(response?.message);
        this.showLoader = false;
      }
    }, error => {
      this.notificationService.showError(error?.message);
      this.showLoader = false;
    });
  }
  projectDetails(projectId) {
    this.router.navigate(['/boss-user/view-project'], {
      queryParams: {
        id: projectId
      }
    });
  }
  editProjectDetails(projectId) {
    this.router.navigate(['/boss-user/add-project'], {
      queryParams: {
        id: projectId
      }
    });
  }
  paginate(page) {
    this.page = page;
    this.getProjectList();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  static #_ = this.ɵfac = function BossUserLiveProjectListingComponent_Factory(t) {
    return new (t || BossUserLiveProjectListingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_project_service_project_service__WEBPACK_IMPORTED_MODULE_2__.ProjectService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: BossUserLiveProjectListingComponent,
    selectors: [["app-boss-user-live-project-listing"]],
    decls: 57,
    vars: 9,
    consts: [["id", "main"], [1, "container-fluid"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-lg-4", "col-xl-4", "col-12", "mob-mb1"], [1, "form-group", "mb-0"], [1, "input-icon"], [1, "bi", "bi-search"], ["placeholder", "Search", "type", "text", 1, "form-control", "control-search", 3, "ngModel", "ngModelChange", "input"], [1, "col-lg-2", "col-xl-2", "col-12", "mob-mb1"], ["id", "navbar", 1, "navbar"], [1, "dropdown"], [1, "btn", "btn-outline-white", "w-100"], ["routerLink", "/boss-user/add-project"], [2, "cursor", "pointer"], [1, "table-responsive", "mt-5", "mb-3"], [1, "table", "table-striped", "align-middle"], ["width", "200px"], [4, "ngFor", "ngForOf"], [1, "row", "mt-3", "align-items-center"], [1, "row"], [1, "pagination"], [3, "pageChange"], ["v-align", "middle"], [3, "href"], [1, "btn", "btn-primary", "btn-sm", "me-2", 2, "cursor", "pointer", 3, "click"], [1, "bi", "bi-eye-fill"], [1, "btn", "btn-primary", "btn-sm", 2, "cursor", "pointer", 3, "click"], [1, "bi", "bi-pencil-fill"]],
    template: function BossUserLiveProjectListingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "main", 0)(1, "section")(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function BossUserLiveProjectListingComponent_Template_input_ngModelChange_8_listener($event) {
          return ctx.searchText = $event;
        })("input", function BossUserLiveProjectListingComponent_Template_input_input_8_listener() {
          return ctx.searchtext();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8)(10, "nav", 9)(11, "ul")(12, "li", 10)(13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "+ Add Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "ul")(16, "li")(17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Single Entry");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "li")(20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Bulk Entry");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 14)(23, "table", 15)(24, "thead")(25, "tr")(26, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Project Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "BOS ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Publish Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Industry");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Link to notice");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Created Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Time Due (Mail)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Due Date & Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, BossUserLiveProjectListingComponent_tr_51_Template, 33, 21, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](52, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 18)(54, "div", 19)(55, "div", 20)(56, "pagination-controls", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function BossUserLiveProjectListingComponent_Template_pagination_controls_pageChange_56_listener($event) {
          return ctx.paginate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](52, 2, ctx.projectList, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](5, _c0, ctx.pagesize, ctx.page, ctx.totalRecords)));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.PaginationControlsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.PaginatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 9965:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/bos-user/boss-user-upload-project/boss-user-upload-project.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BossUserUploadProjectComponent: () => (/* binding */ BossUserUploadProjectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class BossUserUploadProjectComponent {
  static #_ = this.ɵfac = function BossUserUploadProjectComponent_Factory(t) {
    return new (t || BossUserUploadProjectComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BossUserUploadProjectComponent,
    selectors: [["app-boss-user-upload-project"]],
    decls: 2,
    vars: 0,
    template: function BossUserUploadProjectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "boss-user-upload-project works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 3018:
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/bos-user/boss-user-view-project/boss-user-view-project.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BossUserViewProjectComponent: () => (/* binding */ BossUserViewProjectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_project_service_project_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/project-service/project.service */ 1887);
/* harmony import */ var src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/notification/notification.service */ 6610);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);





const _c0 = ["downloadLink"];
function BossUserViewProjectComponent_div_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21)(1, "div", 38)(2, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "No Record Found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function BossUserViewProjectComponent_ng_container_95_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21)(1, "div", 3)(2, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 40)(5, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BossUserViewProjectComponent_ng_container_95_div_1_Template_a_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const foiDocument_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.openDocument(foiDocument_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " View");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 40)(9, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const foiDocument_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](foiDocument_r3 == null ? null : foiDocument_r3.name);
  }
}
function BossUserViewProjectComponent_ng_container_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BossUserViewProjectComponent_ng_container_95_div_1_Template, 12, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.projectDetails == null ? null : ctx_r1.projectDetails.fois);
  }
}
class BossUserViewProjectComponent {
  constructor(projectService, notificationService, router, route) {
    this.projectService = projectService;
    this.notificationService = notificationService;
    this.router = router;
    this.route = route;
    this.showLoader = false;
    this.projectDetails = [];
    this.projectId = '';
    this.currentDate = new Date();
    this.route.queryParams.subscribe(params => {
      this.projectId = params['id'];
    });
  }
  ngOnInit() {
    this.getProjectDetails();
  }
  formatMilliseconds(milliseconds) {
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    return `${days} days`;
  }
  getProjectDetails() {
    this.showLoader = true;
    this.projectService.getProjectDetailsById(this.projectId).subscribe(response => {
      if (response?.status == true) {
        this.showLoader = false;
        this.projectDetails = response?.data;
        const dueDate = new Date(this.projectDetails?.dueDate);
        const currentDate = new Date();
        const dateDifference = Math.abs(dueDate.getTime() - currentDate.getTime());
        const formattedDateDifference = this.formatMilliseconds(dateDifference);
        this.dateDifference = formattedDateDifference;
      } else {
        this.notificationService.showError(response?.message);
        this.showLoader = false;
      }
    }, error => {
      this.notificationService.showError(error?.message);
      this.showLoader = false;
    });
  }
  openDocument(data) {
    this.selectedDocument = data;
  }
  static #_ = this.ɵfac = function BossUserViewProjectComponent_Factory(t) {
    return new (t || BossUserViewProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_project_service_project_service__WEBPACK_IMPORTED_MODULE_0__.ProjectService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: BossUserViewProjectComponent,
    selectors: [["app-boss-user-view-project"]],
    viewQuery: function BossUserViewProjectComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.downloadLink = _t.first);
      }
    },
    decls: 116,
    vars: 41,
    consts: [["id", "main"], [1, "container-fluid"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-lg-4", "col-xl-4", "col-12", "mob-mb1"], [1, "form-group", "mb-0"], [1, "input-icon"], [1, "bi", "bi-search"], ["type", "search", "placeholder", "Search", 1, "form-control", "control-search"], [1, "col-lg-2", "col-xl-2", "col-12", "mob-mb1"], ["routerLink", "/boss-user/project-list", 1, "btn", "btn-outline-white", "w-100"], [1, "bi", "bi-arrow-left"], [1, "table-responsive", "mt-5", "mb-3"], [1, "table", "table-striped", "align-middle"], ["width", "200px"], ["v-align", "middle"], [3, "href"], [1, "text-theme"], [1, "row", "mt-5"], [1, "col-lg-4", "col-xl-4", "col-12", "mb-4"], [1, "card"], [1, "card-body"], [1, "row", "align-items-center"], [1, "col-lg-4", "col-xl-4", "col-12"], [1, "col-lg-7", "col-xl-7", "col-12"], [1, "p-13", "mb-0"], [1, "mb-0"], ["class", "row align-items-center", 4, "ngIf"], [4, "ngIf"], [1, "card-body", "text-center"], [1, "p-13"], ["id", "ViewScreenshot", "tabindex", "-1", "aria-labelledby", "ViewScreenshotLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "ViewScreenshotLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "img-fluid", 3, "src"], [1, "col-lg-12", "col-xl-12", "col-12", "mob-mb1"], ["class", "row align-items-center", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-xl-4", "col-6"], ["data-bs-toggle", "modal", "data-bs-target", "#ViewScreenshot", 1, "btn", "btn-small", "w-100", 3, "click"], [1, "bi", "bi-eye-fill"], ["href", "", "data-bs-toggle", "modal", "data-bs-target", "#fioScreenshot", 1, "btn", "btn-small", "w-100"], [1, "bi", "bi-file-earmark-arrow-down-fill"]],
    template: function BossUserViewProjectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0)(1, "section")(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8)(10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11)(14, "table", 12)(15, "thead")(16, "tr")(17, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Project Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "BOS ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Publish Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Industry");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Link to notice");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Created Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Time Due (Mail)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Due Date & Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "tbody")(40, "tr")(41, "td")(42, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](48, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "td")(58, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](62, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](65, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](68, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "h4", 16)(70, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Project Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 17)(75, "div", 18)(76, "div", 19)(77, "div", 20)(78, "div", 21)(79, "div", 22)(80, "h6", 16)(81, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Client Detils");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 23)(84, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 18)(91, "div", 3)(92, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "FOI Screenshot");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](94, BossUserViewProjectComponent_div_94_Template, 4, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](95, BossUserViewProjectComponent_ng_container_95_Template, 2, 1, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 18)(97, "div", 19)(98, "div", 28)(99, "p", 29)(100, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](102, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](103, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "p", 29)(105, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 30)(108, "div", 31)(109, "div", 32)(110, "div", 33)(111, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](113, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](115, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.projectDetails == null ? null : ctx.projectDetails.projectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.projectDetails == null ? null : ctx.projectDetails.BOSID);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](48, 23, ctx.projectDetails == null ? null : ctx.projectDetails.publishDate, "MM/dd/yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.projectDetails == null ? null : ctx.projectDetails.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.projectDetails == null ? null : ctx.projectDetails.industry);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.projectDetails == null ? null : ctx.projectDetails.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.projectDetails == null ? null : ctx.projectDetails.website);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx.projectDetails == null ? null : ctx.projectDetails.link, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.projectDetails == null ? null : ctx.projectDetails.link);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](62, 26, ctx.projectDetails == null ? null : ctx.projectDetails.createdAt, "MM/dd/yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](65, 29, ctx.projectDetails == null ? null : ctx.projectDetails.dueDate, "MM/dd/yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](68, 32, ctx.projectDetails == null ? null : ctx.projectDetails.dueDate, "MM/dd/yyyy, h:mm a"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.projectDetails == null ? null : ctx.projectDetails.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Mail ID : ", ctx.projectDetails == null ? null : ctx.projectDetails.mailID, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Client Type : ", ctx.projectDetails == null ? null : ctx.projectDetails.clientType, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Client Name : ", ctx.projectDetails == null ? null : ctx.projectDetails.clientName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.projectDetails == null ? null : ctx.projectDetails.fois == null ? null : ctx.projectDetails.fois.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.projectDetails == null ? null : ctx.projectDetails.fois == null ? null : ctx.projectDetails.fois.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Period of Contract: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](102, 35, ctx.projectDetails == null ? null : ctx.projectDetails.periodOfContractStart, "MM/dd/yyyy"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](103, 38, ctx.projectDetails == null ? null : ctx.projectDetails.periodOfContractEnd, "MM/dd/yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Project Type: ", ctx.projectDetails == null ? null : ctx.projectDetails.projectType, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("FOI Screenshot ", ctx.selectedDocument == null ? null : ctx.selectedDocument.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.selectedDocument == null ? null : ctx.selectedDocument.link == null ? null : ctx.selectedDocument.link.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 4267:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/bos-user/fio-document-add-edit/fio-document-add-edit.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FioDocumentAddEditComponent: () => (/* binding */ FioDocumentAddEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_foi_service_foi_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/foi-service/foi.service */ 570);
/* harmony import */ var src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/notification/notification.service */ 6610);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);








function FioDocumentAddEditComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "FOI Doc Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 30)(6, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FioDocumentAddEditComponent_div_7_Template_a_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const item_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.openDocument(item_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " View");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 30)(10, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r2 == null ? null : item_r2.name);
  }
}
function FioDocumentAddEditComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please enter document name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class FioDocumentAddEditComponent {
  constructor(foiService, notificationService, router, route, modalService) {
    this.foiService = foiService;
    this.notificationService = notificationService;
    this.router = router;
    this.route = route;
    this.modalService = modalService;
    this.foiId = '';
    this.foiDocumentList = [];
    this.foiDocumentForm = {
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      projectId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      link: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("")
    };
    this.documentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup(this.foiDocumentForm, []);
    this.route.queryParams.subscribe(params => {
      this.foiId = params['id'];
      this.documentForm.controls.projectId.setValue(this.foiId);
    });
  }
  ngOnInit() {
    this.getFoiDocumentList();
    console.log('foiId', this.foiId);
  }
  getFoiDocumentList() {
    this.foiDocumentList = [];
    this.foiService.getFOIList().subscribe(response => {
      if (response?.status) {
        response?.data?.data?.map(element => {
          if (element?.projectId == this.foiId) {
            this.foiDocumentList.push(element);
          }
        });
      }
    });
  }
  openDocument(data) {
    this.selectedDocument = data;
  }
  // Handle the file change event
  addFiles(event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.imageToUpload = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => {
        this.imageSrc = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
  submitForm() {
    const data = new FormData();
    data.append('link', this.imageToUpload);
    data.append('name', this.documentForm?.controls?.name?.value || '');
    data.append('projectId', this.documentForm.controls.projectId?.value || '');
    this.documentForm.markAllAsTouched();
    if (!this.imageToUpload) {
      return this.notificationService.showError('Please upload image');
    }
    if (!this.documentForm.valid) {
      return this.notificationService.showError('Please fill the form all details!');
    }
    this.foiService.addFOI(data).subscribe(response => {
      if (response?.status) {
        this.getFoiDocumentList();
        this.documentForm.reset();
        this.imageToUpload = null;
        this.notificationService.showSuccess('Add FOI Document successfully !');
      } else {
        this.notificationService.showError(response?.message);
      }
    }, error => {
      this.notificationService.showError(error?.message);
    });
  }
  static #_ = this.ɵfac = function FioDocumentAddEditComponent_Factory(t) {
    return new (t || FioDocumentAddEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_foi_service_foi_service__WEBPACK_IMPORTED_MODULE_0__.FoiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: FioDocumentAddEditComponent,
    selectors: [["app-fio-document-add-edit"]],
    decls: 36,
    vars: 5,
    consts: [["id", "main"], [1, "container-fluid"], [1, "row"], [1, "col-12", "mob-mb1", "text-end"], ["routerLink", "/boss-user/foi-document-list", 1, "btn", "btn-outline-white"], ["class", "row mb-3 align-items-center", 4, "ngFor", "ngForOf"], [3, "formGroup", "ngSubmit"], [1, "row", "mb-3", "align-items-center"], ["for", "inputEmail3", 1, "col-sm-2", "col-form-label"], [1, "col-sm-6"], ["type", "text", "formControlName", "name", 1, "form-control"], ["class", "text-danger", "style", "color: red;", 4, "ngIf"], [1, "col-sm-2"], [1, "upload-btn-wrapper"], ["for", "fileInput", 1, "btn-upload-file"], [1, "bi", "bi-file-earmark-arrow-up-fill"], ["type", "file", "id", "fileInput", "name", "myfile", 2, "height", "10px", "width", "10px", 3, "change"], ["type", "submit", 1, "btn", "btn-dark"], ["id", "ViewScreenshot", "tabindex", "-1", "aria-labelledby", "ViewScreenshotLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header", 2, "display", "flex", "justify-content", "space-between"], ["id", "ViewScreenshotLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "img-fluid", 3, "src"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], [1, "col-lg-4", "col-xl-4", "col-6"], ["disabled", "", "type", "text", 1, "form-control", 3, "value"], [1, "col-lg-3", "col-xl-3", "col-3"], ["data-bs-toggle", "modal", "data-bs-target", "#ViewScreenshot", 1, "btn", "btn-small", "w-100", 3, "click"], [1, "bi", "bi-eye-fill"], ["href", "", "data-bs-toggle", "modal", "data-bs-target", "#fioScreenshot", 1, "btn", "btn-small", "w-100"], [1, "bi", "bi-trash3-fill"], [1, "text-danger", 2, "color", "red"]],
    template: function FioDocumentAddEditComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0)(1, "section")(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, FioDocumentAddEditComponent_div_7_Template, 13, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function FioDocumentAddEditComponent_Template_form_ngSubmit_8_listener() {
          return ctx.submitForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7)(10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "FOI Doc Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, FioDocumentAddEditComponent_span_14_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12)(16, "div", 13)(17, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Upload Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function FioDocumentAddEditComponent_Template_input_change_20_listener($event) {
          return ctx.addFiles($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12)(22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 18)(25, "div", 19)(26, "div", 20)(27, "div", 21)(28, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 26)(34, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.foiDocumentList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.documentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.documentForm.controls.name.touched && (ctx.documentForm.controls.name == null ? null : ctx.documentForm.controls.name.errors == null ? null : ctx.documentForm.controls.name.errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("FOI Document (", ctx.selectedDocument == null ? null : ctx.selectedDocument.name, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.selectedDocument == null ? null : ctx.selectedDocument.link == null ? null : ctx.selectedDocument.link.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 6533:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/bos-user/fio-document-list/fio-document-list.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FioDocumentListComponent: () => (/* binding */ FioDocumentListComponent)
/* harmony export */ });
/* harmony import */ var src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utility/shared/constant/pagination.constant */ 7005);
/* harmony import */ var src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utility/shared/constant/payload.const */ 5557);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_foi_service_foi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/foi-service/foi.service */ 570);
/* harmony import */ var src_app_services_project_service_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/project-service/project.service */ 1887);
/* harmony import */ var src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/notification/notification.service */ 6610);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ 1060);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);










function FioDocumentListComponent_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "td")(18, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "td")(29, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FioDocumentListComponent_tr_38_Template_a_click_29_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.foiDetails(item_r1 == null ? null : item_r1._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FioDocumentListComponent_tr_38_Template_a_click_31_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.addFoiDetails(item_r1 == null ? null : item_r1._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.projectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.BOSID);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](8, 12, item_r1 == null ? null : item_r1.publishDate, "MM/dd/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.industry);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.website);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("href", item_r1 == null ? null : item_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](22, 15, item_r1 == null ? null : item_r1.createdAt, "MM/dd/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.dateDifference);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](27, 18, item_r1 == null ? null : item_r1.dueDate, "MM/dd/yyyy, h:mm a"));
  }
}
const _c0 = function (a0, a1, a2) {
  return {
    itemsPerPage: a0,
    currentPage: a1,
    totalItems: a2
  };
};
class FioDocumentListComponent {
  constructor(foiService, projectService, notificationService, router) {
    this.foiService = foiService;
    this.projectService = projectService;
    this.notificationService = notificationService;
    this.router = router;
    this.showLoader = false;
    this.FOIList = [];
    this.page = src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__.pagination.page;
    this.pagesize = src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__.pagination.itemsPerPage;
    this.totalRecords = src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__.pagination.totalRecords;
  }
  ngOnInit() {
    this.getFOIList();
  }
  formatMilliseconds(milliseconds) {
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    return `${days} days`;
  }
  getFOIList() {
    this.showLoader = true;
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.keyword = this.searchText;
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.page = String(this.page);
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.limit = String(this.pagesize);
    this.projectService.getProjectList(src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList).subscribe(response => {
      this.FOIList = [];
      this.totalRecords = 0;
      if (response?.status == true) {
        this.showLoader = false;
        this.FOIList = response?.data?.data;
        this.FOIList.forEach(project => {
          const dueDate = new Date(project.dueDate);
          const currentDate = new Date();
          const dateDifference = Math.abs(dueDate.getTime() - currentDate.getTime());
          const formattedDateDifference = this.formatMilliseconds(dateDifference);
          this.dateDifference = formattedDateDifference;
        });
      } else {
        this.notificationService.showError(response?.message);
        this.showLoader = false;
      }
    }, error => {
      this.notificationService.showError(error?.message);
      this.showLoader = false;
    });
  }
  searchtext() {
    this.showLoader = true;
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.keyword = this.searchText;
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.page = String(this.page);
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.limit = String(this.pagesize);
    this.projectService.getProjectList(src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList).subscribe(response => {
      this.FOIList = [];
      this.totalRecords = 0;
      if (response?.status == true) {
        this.showLoader = false;
        this.FOIList = response?.data?.data;
        console.log(this.FOIList);
        this.FOIList.forEach(project => {
          const dueDate = new Date(project.dueDate);
          const currentDate = new Date();
          const dateDifference = Math.abs(dueDate.getTime() - currentDate.getTime());
          const formattedDateDifference = this.formatMilliseconds(dateDifference);
          this.dateDifference = formattedDateDifference;
        });
      } else {
        this.notificationService.showError(response?.message);
        this.showLoader = false;
      }
    }, error => {
      this.notificationService.showError(error?.message);
      this.showLoader = false;
    });
  }
  foiDetails(projectID) {
    this.router.navigate(['/boss-user/view-project'], {
      queryParams: {
        id: projectID
      }
    });
  }
  addFoiDetails(projectID) {
    this.router.navigate(['/boss-user/foi-document-add'], {
      queryParams: {
        id: projectID
      }
    });
  }
  paginate(page) {
    this.page = page;
    this.getFOIList();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  static #_ = this.ɵfac = function FioDocumentListComponent_Factory(t) {
    return new (t || FioDocumentListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_foi_service_foi_service__WEBPACK_IMPORTED_MODULE_2__.FoiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_project_service_project_service__WEBPACK_IMPORTED_MODULE_3__.ProjectService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: FioDocumentListComponent,
    selectors: [["app-fio-document-list"]],
    decls: 44,
    vars: 9,
    consts: [["id", "main"], [1, "container-fluid"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-lg-4", "col-xl-4", "col-12", "mob-mb1"], [1, "form-group", "mb-0"], [1, "input-icon"], [1, "bi", "bi-search"], ["placeholder", "Search", "type", "text", 1, "form-control", "control-search", 3, "ngModel", "ngModelChange", "input"], [1, "table-responsive", "mt-5", "mb-3"], [1, "table", "table-striped", "align-middle"], ["width", "200px"], [4, "ngFor", "ngForOf"], [1, "row", "mt-3", "align-items-center"], [1, "row"], [1, "pagination"], [3, "pageChange"], ["v-align", "middle"], [3, "href"], [1, "btn", "btn-primary", "btn-sm", "me-2", 3, "click"], [1, "bi", "bi-eye-fill"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-file-earmark-arrow-up-fill"]],
    template: function FioDocumentListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "main", 0)(1, "section")(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function FioDocumentListComponent_Template_input_ngModelChange_8_listener($event) {
          return ctx.searchText = $event;
        })("input", function FioDocumentListComponent_Template_input_input_8_listener() {
          return ctx.searchtext();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 8)(10, "table", 9)(11, "thead")(12, "tr")(13, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Project Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "BOS ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Publish Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Industry");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Link to notice");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Created Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Time Due (Mail)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Due Date & Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, FioDocumentListComponent_tr_38_Template, 33, 21, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](39, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 12)(41, "div", 13)(42, "div", 14)(43, "pagination-controls", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function FioDocumentListComponent_Template_pagination_controls_pageChange_43_listener($event) {
          return ctx.paginate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](39, 2, ctx.FOIList, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](5, _c0, ctx.pagesize, ctx.page, ctx.totalRecords)));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.PaginationControlsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.PaginatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 2676:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/bos-user/mail-screenshot-add-edit/mail-screenshot-add-edit.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MailScreenshotAddEditComponent: () => (/* binding */ MailScreenshotAddEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utility/shared/constant/pagination.constant */ 7005);
/* harmony import */ var src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utility/shared/constant/payload.const */ 5557);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_mailscreenshot_service_mailscreenshot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/mailscreenshot-service/mailscreenshot.service */ 325);
/* harmony import */ var src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notification/notification.service */ 6610);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ 1060);










function MailScreenshotAddEditComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please enter project name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MailScreenshotAddEditComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please enter boss id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MailScreenshotAddEditComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please enter email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MailScreenshotAddEditComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td")(9, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MailScreenshotAddEditComponent_tr_41_Template_a_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const item_r4 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.openDocument(item_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " View");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MailScreenshotAddEditComponent_tr_41_Template_a_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const item_r4 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.download(item_r4 == null ? null : item_r4.link == null ? null : item_r4.link.url, item_r4 == null ? null : item_r4.projectName));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r4 == null ? null : item_r4.projectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r4 == null ? null : item_r4.BOSId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r4 == null ? null : item_r4.emailId);
  }
}
const _c0 = function (a0, a1, a2) {
  return {
    itemsPerPage: a0,
    currentPage: a1,
    totalItems: a2
  };
};
class MailScreenshotAddEditComponent {
  constructor(mailService, notificationService, router) {
    this.mailService = mailService;
    this.notificationService = notificationService;
    this.router = router;
    this.showLoader = false;
    this.mailList = [];
    this.page = src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__.pagination.page;
    this.pagesize = src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__.pagination.itemsPerPage;
    this.totalRecords = src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__.pagination.totalRecords;
    this.mailDocumentForm = {
      projectName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      BOSId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]),
      link: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("")
    };
    this.documentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup(this.mailDocumentForm, []);
  }
  ngOnInit() {
    this.getMailSSList();
  }
  getMailSSList() {
    this.showLoader = true;
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.mailSSList.keyword = this.searchText;
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.mailSSList.page = String(this.page);
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.mailSSList.limit = String(this.pagesize);
    this.mailService.getMailSSList(src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.mailSSList).subscribe(response => {
      this.mailList = [];
      this.totalRecords = 0;
      if (response?.status == true) {
        this.showLoader = false;
        this.mailList = response?.data?.data;
      } else {
        this.notificationService.showError(response?.message);
        this.showLoader = false;
      }
    }, error => {
      this.notificationService.showError(error?.message);
      this.showLoader = false;
    });
  }
  // implement pagination
  paginate(page) {
    this.page = page;
    this.getMailSSList();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  // document open functionality
  openDocument(data) {
    this.selectedDocument = data;
  }
  // Handle the file change event
  addFiles(event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.imageToUpload = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => {
        this.imageSrc = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
  submitForm() {
    const data = new FormData();
    data.append('link', this.imageToUpload);
    data.append('projectName', this.documentForm?.controls?.projectName?.value || '');
    data.append('BOSId', this.documentForm.controls.BOSId?.value || '');
    data.append('emailId', this.documentForm.controls.emailId?.value || '');
    this.documentForm.markAllAsTouched();
    if (!this.imageToUpload) {
      return this.notificationService.showError('Please upload image');
    }
    if (!this.documentForm.valid) {
      return this.notificationService.showError('Please fill the form all details!');
    }
    this.mailService.addMailSS(data).subscribe(response => {
      if (response?.status) {
        this.getMailSSList();
        this.documentForm.reset();
        this.imageToUpload = null;
        this.notificationService.showSuccess('Add Mail Ss successfully !');
      } else {
        this.notificationService.showError(response?.message);
      }
    }, error => {
      this.notificationService.showError(error?.message);
    });
  }
  download(imageUrl, fileName) {
    fetch(imageUrl).then(response => response.blob()).then(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName); // You can customize the filename here
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
  static #_ = this.ɵfac = function MailScreenshotAddEditComponent_Factory(t) {
    return new (t || MailScreenshotAddEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_mailscreenshot_service_mailscreenshot_service__WEBPACK_IMPORTED_MODULE_2__.MailscreenshotService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: MailScreenshotAddEditComponent,
    selectors: [["app-mail-screenshot-add-edit"]],
    decls: 56,
    vars: 14,
    consts: [["id", "main"], [1, "container-fluidx"], [1, "row", "align-items-center", "justify-content-end", "mb-4"], [1, "col-auto", "mob-mb1"], ["routerLink", "/boss-user/home", 1, "btn", "btn-outline-white", "w-100"], [1, "bi", "bi-arrow-left"], [3, "formGroup", "ngSubmit"], [1, "row", "mb-3", "align-items-center"], [1, "col-sm-3"], ["type", "text", "formControlName", "projectName", "placeholder", "Project Name", 1, "form-control"], ["class", "text-danger", "style", "color: red;", 4, "ngIf"], [1, "col-sm-2"], ["type", "text", "formControlName", "BOSId", "placeholder", "BOS ID", 1, "form-control"], ["type", "email", "formControlName", "emailId", "placeholder", "Enter Email ID", 1, "form-control"], [1, "upload-btn-wrapper"], ["for", "fileInput", 1, "btn-upload-file"], [1, "bi", "bi-file-earmark-arrow-up-fill"], ["type", "file", "id", "fileInput", "name", "myfile", 2, "height", "10px", "width", "10px", 3, "change"], ["type", "submit", 1, "btn", "btn-primary", "w-100"], [1, "table-responsive", "mt-5", "mb-3"], [1, "table", "table-striped", "align-middle"], [4, "ngFor", "ngForOf"], [1, "row", "mt-3", "align-items-center"], [1, "row"], [1, "pagination"], [3, "pageChange"], ["id", "ViewScreenshot", "tabindex", "-1", "aria-labelledby", "ViewScreenshotLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "ViewScreenshotLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "img-fluid", 3, "src"], [1, "text-danger", 2, "color", "red"], ["href", "javascript:;"], ["v-align", "middle"], ["data-bs-toggle", "modal", "data-bs-target", "#ViewScreenshot", 1, "btn", "btn-small", "me-2", 3, "click"], [1, "bi", "bi-eye-fill"], ["href", "javascript:;", "target", "_blank", 1, "btn", "btn-small", 3, "click"], [1, "bi", "bi-file-earmark-arrow-down-fill"]],
    template: function MailScreenshotAddEditComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "main", 0)(1, "section")(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function MailScreenshotAddEditComponent_Template_form_ngSubmit_8_listener() {
          return ctx.submitForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 7)(10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, MailScreenshotAddEditComponent_span_12_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, MailScreenshotAddEditComponent_span_15_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, MailScreenshotAddEditComponent_span_18_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 11)(20, "div", 14)(21, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Upload Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function MailScreenshotAddEditComponent_Template_input_change_24_listener($event) {
          return ctx.addFiles($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 11)(26, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "ADD");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 19)(29, "table", 20)(30, "thead")(31, "tr")(32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Project Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "BOS ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Screenshot");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, MailScreenshotAddEditComponent_tr_41_Template, 15, 3, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](42, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 22)(44, "div", 23)(45, "div", 24)(46, "pagination-controls", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function MailScreenshotAddEditComponent_Template_pagination_controls_pageChange_46_listener($event) {
          return ctx.paginate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 26)(48, "div", 27)(49, "div", 28)(50, "div", 29)(51, "h5", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.documentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.documentForm.controls.projectName.touched && (ctx.documentForm.controls.projectName == null ? null : ctx.documentForm.controls.projectName.errors == null ? null : ctx.documentForm.controls.projectName.errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.documentForm.controls.BOSId.touched && (ctx.documentForm.controls.BOSId == null ? null : ctx.documentForm.controls.BOSId.errors == null ? null : ctx.documentForm.controls.BOSId.errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.documentForm.controls.emailId.touched && (ctx.documentForm.controls.emailId == null ? null : ctx.documentForm.controls.emailId.errors == null ? null : ctx.documentForm.controls.emailId.errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](42, 7, ctx.mailList, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](10, _c0, ctx.pagesize, ctx.page, ctx.totalRecords)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Mail Screenshot (", ctx.selectedDocument == null ? null : ctx.selectedDocument.projectName, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.selectedDocument == null ? null : ctx.selectedDocument.link == null ? null : ctx.selectedDocument.link.url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.PaginationControlsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.PaginatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 6146:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/feasibility-analyst/add-login-details/add-login-details.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddLoginDetailsComponent: () => (/* binding */ AddLoginDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);


class AddLoginDetailsComponent {
  static #_ = this.ɵfac = function AddLoginDetailsComponent_Factory(t) {
    return new (t || AddLoginDetailsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AddLoginDetailsComponent,
    selectors: [["app-add-login-details"]],
    decls: 30,
    vars: 0,
    consts: [["id", "main"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-6", "col-xl-6", "col-md-10", "col-sm-12", "col-12"], [1, "row", "mb-3"], ["for", "inputEmail3", 1, "col-sm-3", "col-form-label"], [1, "col-sm-9"], ["type", "text", "id", "inputEmail3", 1, "form-control"], ["type", "password", "id", "inputEmail3", 1, "form-control"], [1, "col-sm-12", "text-end"], ["type", "submit", 1, "btn", "btn-dark", "w-25"]],
    template: function AddLoginDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "section")(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "form")(6, "div", 4)(7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4)(12, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Website Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4)(17, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Login ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4)(22, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4)(27, "div", 9)(28, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 8803:
/*!******************************************************************************!*\
  !*** ./src/app/modules/feasibility-analyst/feasibility-analyst.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeasibilityAnalystComponent: () => (/* binding */ FeasibilityAnalystComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_utility_shared_components_feasibility_header_feasibility_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utility/shared/components/feasibility-header/feasibility-header.component */ 4390);



class FeasibilityAnalystComponent {
  static #_ = this.ɵfac = function FeasibilityAnalystComponent_Factory(t) {
    return new (t || FeasibilityAnalystComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FeasibilityAnalystComponent,
    selectors: [["app-feasibility-analyst"]],
    decls: 2,
    vars: 0,
    template: function FeasibilityAnalystComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-feasibility-header")(1, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, src_app_utility_shared_components_feasibility_header_feasibility_header_component__WEBPACK_IMPORTED_MODULE_0__.FeasibilityHeaderComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 8022:
/*!***************************************************************************!*\
  !*** ./src/app/modules/feasibility-analyst/feasibility-analyst.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeasibilityModule: () => (/* binding */ FeasibilityModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ 1060);
/* harmony import */ var src_app_utility_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utility/shared/shared.module */ 7313);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _feasibility_project_details_feasibility_project_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feasibility-project-details/feasibility-project-details.component */ 2142);
/* harmony import */ var _feasibility_analyst_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feasibility-analyst.routing.module */ 4145);
/* harmony import */ var _feasibility_login_details_feasibility_login_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feasibility-login-details/feasibility-login-details.component */ 1391);
/* harmony import */ var _minimum_eligibility_form_minimum_eligibility_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./minimum-eligibility-form/minimum-eligibility-form.component */ 9976);
/* harmony import */ var _summary_note_questions_summary_note_questions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./summary-note-questions/summary-note-questions.component */ 1255);
/* harmony import */ var _add_login_details_add_login_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-login-details/add-login-details.component */ 6146);
/* harmony import */ var _feasibility_projects_list_feasibility_projects_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./feasibility-projects-list/feasibility-projects-list.component */ 4968);
/* harmony import */ var _feasibility_analyst_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./feasibility-analyst.component */ 8803);
/* harmony import */ var src_app_utility_shared_components_feasibility_header_feasibility_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/utility/shared/components/feasibility-header/feasibility-header.component */ 4390);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);















class FeasibilityModule {
  static #_ = this.ɵfac = function FeasibilityModule_Factory(t) {
    return new (t || FeasibilityModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: FeasibilityModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _feasibility_analyst_routing_module__WEBPACK_IMPORTED_MODULE_2__.FeasibilityAnalsystRoutingModule, src_app_utility_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_12__.NgxPaginationModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](FeasibilityModule, {
    declarations: [_feasibility_analyst_component__WEBPACK_IMPORTED_MODULE_8__.FeasibilityAnalystComponent, _feasibility_project_details_feasibility_project_details_component__WEBPACK_IMPORTED_MODULE_1__.FeasibilityProjectDetailsComponent, _feasibility_login_details_feasibility_login_details_component__WEBPACK_IMPORTED_MODULE_3__.FeasibilityLoginDetailsComponent, _minimum_eligibility_form_minimum_eligibility_form_component__WEBPACK_IMPORTED_MODULE_4__.MinimumEligibilityFormComponent, _summary_note_questions_summary_note_questions_component__WEBPACK_IMPORTED_MODULE_5__.SummaryNoteQuestionsComponent, _add_login_details_add_login_details_component__WEBPACK_IMPORTED_MODULE_6__.AddLoginDetailsComponent, _feasibility_projects_list_feasibility_projects_list_component__WEBPACK_IMPORTED_MODULE_7__.FeasibilityProjectsListComponent, src_app_utility_shared_components_feasibility_header_feasibility_header_component__WEBPACK_IMPORTED_MODULE_9__.FeasibilityHeaderComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _feasibility_analyst_routing_module__WEBPACK_IMPORTED_MODULE_2__.FeasibilityAnalsystRoutingModule, src_app_utility_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_12__.NgxPaginationModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule]
  });
})();

/***/ }),

/***/ 4145:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/feasibility-analyst/feasibility-analyst.routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeasibilityAnalsystRoutingModule: () => (/* binding */ FeasibilityAnalsystRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _feasibility_analyst_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feasibility-analyst.component */ 8803);
/* harmony import */ var _feasibility_project_details_feasibility_project_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feasibility-project-details/feasibility-project-details.component */ 2142);
/* harmony import */ var _feasibility_projects_list_feasibility_projects_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feasibility-projects-list/feasibility-projects-list.component */ 4968);
/* harmony import */ var _minimum_eligibility_form_minimum_eligibility_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./minimum-eligibility-form/minimum-eligibility-form.component */ 9976);
/* harmony import */ var _summary_note_questions_summary_note_questions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./summary-note-questions/summary-note-questions.component */ 1255);
/* harmony import */ var _feasibility_login_details_feasibility_login_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feasibility-login-details/feasibility-login-details.component */ 1391);
/* harmony import */ var _add_login_details_add_login_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-login-details/add-login-details.component */ 6146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);










const routes = [{
  path: '',
  component: _feasibility_analyst_component__WEBPACK_IMPORTED_MODULE_0__.FeasibilityAnalystComponent,
  children: [{
    path: "feasibility-project-detail",
    component: _feasibility_project_details_feasibility_project_details_component__WEBPACK_IMPORTED_MODULE_1__.FeasibilityProjectDetailsComponent
  }, {
    path: "feasibility-project-list",
    component: _feasibility_projects_list_feasibility_projects_list_component__WEBPACK_IMPORTED_MODULE_2__.FeasibilityProjectsListComponent
  }, {
    path: "minimum-eligibility-form",
    component: _minimum_eligibility_form_minimum_eligibility_form_component__WEBPACK_IMPORTED_MODULE_3__.MinimumEligibilityFormComponent
  }, {
    path: "summary-note-questions",
    component: _summary_note_questions_summary_note_questions_component__WEBPACK_IMPORTED_MODULE_4__.SummaryNoteQuestionsComponent
  }, {
    path: "feasibility-login-detail",
    component: _feasibility_login_details_feasibility_login_details_component__WEBPACK_IMPORTED_MODULE_5__.FeasibilityLoginDetailsComponent
  }, {
    path: "add-login-detail",
    component: _add_login_details_add_login_details_component__WEBPACK_IMPORTED_MODULE_6__.AddLoginDetailsComponent
  }]
}, {
  path: "**",
  pathMatch: "full",
  redirectTo: ""
}];
class FeasibilityAnalsystRoutingModule {
  static #_ = this.ɵfac = function FeasibilityAnalsystRoutingModule_Factory(t) {
    return new (t || FeasibilityAnalsystRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: FeasibilityAnalsystRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](FeasibilityAnalsystRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 1391:
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/feasibility-analyst/feasibility-login-details/feasibility-login-details.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeasibilityLoginDetailsComponent: () => (/* binding */ FeasibilityLoginDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);


class FeasibilityLoginDetailsComponent {
  static #_ = this.ɵfac = function FeasibilityLoginDetailsComponent_Factory(t) {
    return new (t || FeasibilityLoginDetailsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FeasibilityLoginDetailsComponent,
    selectors: [["app-feasibility-login-details"]],
    decls: 30,
    vars: 0,
    consts: [["id", "main"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-6", "col-xl-6", "col-md-10", "col-sm-12", "col-12"], [1, "row", "mb-3"], ["for", "inputEmail3", 1, "col-sm-3", "col-form-label"], [1, "col-sm-9"], ["type", "text", "id", "inputEmail3", 1, "form-control"], ["type", "password", "id", "inputEmail3", 1, "form-control"], [1, "col-sm-12", "text-end"], ["type", "submit", 1, "btn", "btn-dark", "w-25"]],
    template: function FeasibilityLoginDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "section")(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "form")(6, "div", 4)(7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4)(12, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Website Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4)(17, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Login ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4)(22, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4)(27, "div", 9)(28, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 2142:
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/feasibility-analyst/feasibility-project-details/feasibility-project-details.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeasibilityProjectDetailsComponent: () => (/* binding */ FeasibilityProjectDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_project_service_project_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/project-service/project.service */ 1887);
/* harmony import */ var src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/notification/notification.service */ 6610);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);






const _c0 = ["downloadLink"];
class FeasibilityProjectDetailsComponent {
  constructor(projectService, notificationService, router, route) {
    this.projectService = projectService;
    this.notificationService = notificationService;
    this.router = router;
    this.route = route;
    this.showLoader = false;
    this.projectDetails = [];
    this.projectId = '';
    this.currentDate = new Date();
    this.route.queryParams.subscribe(params => {
      this.projectId = params['id'];
    });
  }
  ngOnInit() {
    this.getProjectDetails();
  }
  formatMilliseconds(milliseconds) {
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    return `${days} days`;
  }
  getProjectDetails() {
    this.showLoader = true;
    this.projectService.getProjectDetailsById(this.projectId).subscribe(response => {
      if (response?.status == true) {
        this.showLoader = false;
        this.projectDetails = response?.data;
        const dueDate = new Date(this.projectDetails?.dueDate);
        const currentDate = new Date();
        const dateDifference = Math.abs(dueDate.getTime() - currentDate.getTime());
        const formattedDateDifference = this.formatMilliseconds(dateDifference);
        this.dateDifference = formattedDateDifference;
      } else {
        this.notificationService.showError(response?.message);
        this.showLoader = false;
      }
    }, error => {
      this.notificationService.showError(error?.message);
      this.showLoader = false;
    });
  }
  static #_ = this.ɵfac = function FeasibilityProjectDetailsComponent_Factory(t) {
    return new (t || FeasibilityProjectDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_project_service_project_service__WEBPACK_IMPORTED_MODULE_0__.ProjectService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: FeasibilityProjectDetailsComponent,
    selectors: [["app-feasibility-project-details"]],
    viewQuery: function FeasibilityProjectDetailsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.downloadLink = _t.first);
      }
    },
    decls: 358,
    vars: 31,
    consts: [["id", "main"], [1, "container"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-lg-4", "col-xl-4", "col-12", "mob-mb1"], [1, "form-group", "mb-0"], [1, "input-icon"], [1, "bi", "bi-search"], ["type", "search", "placeholder", "Search", 1, "form-control", "control-search"], [1, "col-lg-2", "col-xl-2", "col-12"], ["routerLink", "/feasibility-user/feasibility-project-list", 1, "btn", "btn-outline-secondary", "w-100", "box-shadow"], [1, "table-responsive", "mt-5", "mb-3"], [1, "table", "table-striped", "align-middle"], ["width", "200px"], ["v-align", "middle"], [1, "form-select", "form-select-sm"], [1, "row", "align-items-center"], [1, "col-lg-9", "col-xl-9", "col-12"], [1, "row"], [1, "col-lg-3", "col-xl-3", "col-md-3", "col-sm-3", "col-12"], [1, "form-group"], [1, "display-block"], [1, "upload-btn-wrapper"], [1, "btn-upload-file"], [1, "bi", "bi-file-earmark-arrow-up-fill"], ["type", "file", "name", "myfile"], ["type", "button", 1, "btn", "btn-dark", "btn-sm"], [1, "bi", "bi-plus-lg"], [1, "form-check", "form-check-inline", "mt-3"], ["type", "radio", "name", "inlineRadioOptions", "id", "inlineRadio1", "value", "option1", 1, "form-check-input"], ["for", "inlineRadio1", 1, "form-check-label"], [1, "form-check", "form-check-inline"], ["type", "radio", "name", "inlineRadioOptions", "id", "inlineRadio2", "value", "option2", 1, "form-check-input"], ["for", "inlineRadio2", 1, "form-check-label"], [1, "col-lg-3", "col-xl-3", "col-12"], [1, "card", "bg-primary"], [1, "card-body"], [1, "col-lg-4", "col-xl-4", "col-12"], [1, "p-12", "text-white"], [1, "col-lg-7", "col-xl-7", "col-12"], [1, "p-10", "mb-0", "text-white"], [1, "row", "mb-4", "mt-4"], [1, "text-theme"], [1, "row", "mt-5"], [1, "col-lg-4", "col-xl-4", "col-12", "mb-4"], [1, "card"], [1, "p-13", "mb-0"], [1, "mb-0"], [1, "col-lg-4", "col-xl-4", "col-6"], ["href", "", "data-bs-toggle", "modal", "data-bs-target", "#ViewScreenshot", 1, "btn", "btn-small", "w-100"], [1, "bi", "bi-eye-fill"], [1, "row", "align-items-center", "mt-3"], ["href", "", 1, "btn", "btn-small", "w-100"], [1, "card-body", "text-center"], [1, "p-13"], [1, "row", "mb-4"], [1, "col-12"], [1, "text-theme", "mb-4"], [1, "col-lg-5", "col-xl-5", "col-12", "mob-mb1"], [1, "project-document"], [1, "col-5", "text-center"], ["href", "href:;", 1, "editbtn"], [1, "bi", "bi-pencil-fill"], [1, "col-7", "text-center"], ["href", "href:;", 1, "btn", "btn-primarysm"], [1, "bi", "bi-file-earmark-arrow-down-fill"], ["type", "button", 1, "btn", "btn-dark", "btn-sm", "add-card-btn"], [1, "form-check"], ["type", "text", "placeholder", "Comments for In-Progress", 1, "form-control"], [1, "col-6"], ["type", "date", "placeholder", "Date", 1, "form-control"], ["type", "text", "placeholder", "Comments for In-Hold", 1, "form-control"], ["for", "inlineRadio1", 1, "form-check-label", "text-success"], ["type", "text", "placeholder", "Comments for Pass", 1, "form-control"], [1, "col-4"], ["for", "inlineRadio1", 1, "form-check-label", "text-danger"], [1, "col-8"], [1, "col-12", "mt-3"], [1, "form-select"], [1, "col-lg-6", "col-xl-6", "col-12"], [1, "col-lg-6", "col-xl-6", "col-10"], [1, "col-lg-6", "col-xl-6", "col-12", "text-end"], ["type", "button", 1, "btn", "btn-sm", "btn-dark"], [1, "row", "justify-content-end"], [1, "col-lg-2", "col-xl-2", "col-md-2", "col-sm-2", "col-12", "text-end"], ["href", "project-details-next-step2.html", 1, "btn", "btn-dark", "w-100"]],
    template: function FeasibilityProjectDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0)(1, "section")(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8)(10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10)(13, "table", 11)(14, "thead")(15, "tr")(16, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Project Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "BOS ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Publish Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Industry");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Project Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Due Date & Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "tbody")(37, "tr")(38, "td")(39, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](45, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](58, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "td")(60, "select", 14)(61, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "In-Progress, In Hold");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 15)(64, "div", 16)(65, "div", 17)(66, "div", 18)(67, "div", 19)(68, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Sub-contracting");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 21)(71, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, " Upload Query Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 18)(76, "div", 19)(77, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Economical partnership");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 21)(80, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, " Upload Query Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 18)(85, "div", 19)(86, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "other");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 21)(89, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, " Upload Query Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 18)(94, "div", 19)(95, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 21)(98, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, " Upload Doc...");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](103, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 17)(105, "div", 18)(106, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](107, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](111, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 18)(115, "div", 19)(116, "div", 21)(117, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](118, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, " Upload Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](120, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "div", 18)(122, "div", 19)(123, "div", 21)(124, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](125, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, " Upload Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](127, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "div", 18)(129, "div", 19)(130, "div", 21)(131, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](132, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, " Upload Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](134, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "div", 33)(136, "div", 34)(137, "div", 35)(138, "div", 15)(139, "div", 36)(140, "h6", 37)(141, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](142, "Client Detils");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "div", 38)(144, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](145);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "div", 40)(151, "h4", 41)(152, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, "Project Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "div", 42)(157, "div", 43)(158, "div", 44)(159, "div", 35)(160, "div", 15)(161, "div", 36)(162, "h6", 41)(163, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, "Client Detils");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "div", 38)(166, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](167);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](171);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "div", 43)(173, "div", 15)(174, "div", 3)(175, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](176, "FOI Screenshot");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "div", 47)(178, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](179, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](180, " View");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "div", 50)(182, "div", 3)(183, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](184, "FOI Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "div", 47)(186, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](187, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](188, " View");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "div", 43)(190, "div", 44)(191, "div", 52)(192, "p", 53)(193, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](194);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](195, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](196, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "p", 53)(198, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](199);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](200, "div", 54)(201, "div", 55)(202, "h4", 56)(203, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](204, "Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](205, "div", 57)(206, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](207, "Client Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](208, "div", 44)(209, "ul", 58)(210, "li")(211, "div", 17)(212, "div", 59)(213, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](214, "ITT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](215, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](216, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](217, "div", 62)(218, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](219, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](220, " View");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](221, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](222, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](223, " Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](224, "li")(225, "div", 17)(226, "div", 59)(227, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](228, "SQ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](229, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](230, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](231, "div", 62)(232, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](233, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](234, " View");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](235, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](236, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](237, " Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](238, "li")(239, "div", 17)(240, "div", 59)(241, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](242, "T&C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](243, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](244, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](245, "div", 62)(246, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](247, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](248, " View");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](249, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](250, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](251, " Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](252, "li")(253, "div", 17)(254, "div", 59)(255, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](256, "Specification ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](257, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](258, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](259, "div", 62)(260, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](261, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](262, " View");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](263, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](264, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](265, " Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](266, "li")(267, "div", 17)(268, "div", 59)(269, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](270, "Notice ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](271, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](272, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](273, "div", 62)(274, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](275, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](276, " View");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](277, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](278, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](279, " Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](280, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](281, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](282, "div", 36)(283, "div", 19)(284, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](285, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](286, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](287, "In-Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](288, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](289, "div", 19)(290, "div", 15)(291, "div", 68)(292, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](293, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](294, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](295, "In-Hold");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](296, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](297, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](298, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](299, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](300, "div", 19)(301, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](302, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](303, "label", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](304, "Pass");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](305, "input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](306, "div", 33)(307, "div", 19)(308, "div", 15)(309, "div", 73)(310, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](311, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](312, "label", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](313, "Fail");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](314, "div", 75)(315, "div", 21)(316, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](317, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](318, " Upload Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](319, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](320, "div", 76)(321, "select", 77)(322, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](323, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](324, "div", 17)(325, "div", 36)(326, "div", 15)(327, "div", 78)(328, "p")(329, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](330, "Login Details 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](331, "div", 79)(332, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](333, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](334, " View");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](335, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](336, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](337, " Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](338, "div", 15)(339, "div", 78)(340, "p")(341, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](342, "Login Details 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](343, "div", 79)(344, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](345, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](346, " View");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](347, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](348, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](349, " Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](350, "div", 15)(351, "div", 80)(352, "button", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](353, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](354, "div", 82)(355, "div", 83)(356, "a", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](357, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.projectDetails == null ? null : ctx.projectDetails.projectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.projectDetails == null ? null : ctx.projectDetails.BOSID);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](45, 19, ctx.projectDetails == null ? null : ctx.projectDetails.publishDate, "MM/dd/yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.projectDetails == null ? null : ctx.projectDetails.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.projectDetails == null ? null : ctx.projectDetails.industry);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.projectDetails == null ? null : ctx.projectDetails.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.projectDetails == null ? null : ctx.projectDetails.projectType);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.projectDetails == null ? null : ctx.projectDetails.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](58, 22, ctx.projectDetails == null ? null : ctx.projectDetails.dueDate, "MM/dd/yyyy, h:mm a"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Mail ID : ", ctx.projectDetails == null ? null : ctx.projectDetails.mailID, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Client Type : ", ctx.projectDetails == null ? null : ctx.projectDetails.clientType, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Client Name : ", ctx.projectDetails == null ? null : ctx.projectDetails.clientName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.projectDetails == null ? null : ctx.projectDetails.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Mail ID : ", ctx.projectDetails == null ? null : ctx.projectDetails.mailID, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Client Type : ", ctx.projectDetails == null ? null : ctx.projectDetails.clientType, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Client Name : ", ctx.projectDetails == null ? null : ctx.projectDetails.clientName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Period of Contract: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](195, 25, ctx.projectDetails == null ? null : ctx.projectDetails.periodOfContractStart, "MM/dd/yyyy"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](196, 28, ctx.projectDetails == null ? null : ctx.projectDetails.periodOfContractEnd, "MM/dd/yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Project Type: ", ctx.projectDetails == null ? null : ctx.projectDetails.projectType, "");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 4968:
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/feasibility-analyst/feasibility-projects-list/feasibility-projects-list.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeasibilityProjectsListComponent: () => (/* binding */ FeasibilityProjectsListComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utility/shared/constant/pagination.constant */ 7005);
/* harmony import */ var src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utility/shared/constant/payload.const */ 5557);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_project_service_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/project-service/project.service */ 1887);
/* harmony import */ var src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notification/notification.service */ 6610);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ 1060);










function FeasibilityProjectsListComponent_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "td")(23, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FeasibilityProjectsListComponent_tr_34_Template_a_click_23_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.projectDetails(item_r1 == null ? null : item_r1._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "View Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.projectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.BOSID);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](8, 9, item_r1 == null ? null : item_r1.publishDate, "MM/dd/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.industry);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.projectType);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](21, 12, item_r1 == null ? null : item_r1.dueDate, "MM/dd/yyyy, h:mm a"));
  }
}
const _c0 = function (a0, a1, a2) {
  return {
    itemsPerPage: a0,
    currentPage: a1,
    totalItems: a2
  };
};
class FeasibilityProjectsListComponent {
  constructor(projectService, notificationService, router) {
    this.projectService = projectService;
    this.notificationService = notificationService;
    this.router = router;
    this.showLoader = false;
    this.projectList = [];
    this.page = src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__.pagination.page;
    this.pagesize = src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__.pagination.itemsPerPage;
    this.totalRecords = src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__.pagination.totalRecords;
    this.currentDate = new Date();
    this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl();
  }
  ngOnInit() {
    this.myControl.valueChanges.subscribe(res => {
      let storeTest = res;
      this.searchText = res.toLowerCase();
    });
    this.getProjectList();
  }
  formatMilliseconds(milliseconds) {
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    return `${days} days`;
  }
  getProjectList() {
    this.showLoader = true;
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.keyword = this.searchText;
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.page = String(this.page);
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.limit = String(this.pagesize);
    this.projectService.getProjectList(src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList).subscribe(response => {
      this.projectList = [];
      this.totalRecords = 0;
      if (response?.status == true) {
        this.showLoader = false;
        this.projectList = response?.data?.data;
        console.log(this.projectList);
        this.projectList.forEach(project => {
          const dueDate = new Date(project.dueDate);
          const currentDate = new Date();
          const dateDifference = Math.abs(dueDate.getTime() - currentDate.getTime());
          const formattedDateDifference = this.formatMilliseconds(dateDifference);
          this.dateDifference = formattedDateDifference;
        });
      } else {
        this.notificationService.showError(response?.message);
        this.showLoader = false;
      }
    }, error => {
      this.notificationService.showError(error?.message);
      this.showLoader = false;
    });
  }
  searchtext() {
    this.showLoader = true;
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.keyword = this.searchText || '';
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.page = String(this.page);
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.limit = String(this.pagesize);
    // let params = {
    //   keyword: this.searchText || '',
    //   page: String(this.page),
    //   limit: String(this.pagesize),
    // }
    console.log(src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList);
    this.projectService.getProjectList(src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList).subscribe(response => {
      this.projectList = [];
      this.totalRecords = 0;
      if (response?.status == true) {
        this.showLoader = false;
        this.projectList = response?.data?.data;
        console.log(this.projectList);
        this.projectList.forEach(project => {
          const dueDate = new Date(project.dueDate);
          const currentDate = new Date();
          const dateDifference = Math.abs(dueDate.getTime() - currentDate.getTime());
          console.log(`Date difference for project ${dateDifference}`);
          const formattedDateDifference = this.formatMilliseconds(dateDifference);
          this.dateDifference = formattedDateDifference;
        });
      } else {
        this.notificationService.showError(response?.message);
        this.showLoader = false;
      }
    }, error => {
      this.notificationService.showError(error?.message);
      this.showLoader = false;
    });
  }
  projectDetails(projectId) {
    this.router.navigate(['/feasibility-user/feasibility-project-detail'], {
      queryParams: {
        id: projectId
      }
    });
  }
  editProjectDetails(projectId) {
    this.router.navigate(['/boss-user/add-project'], {
      queryParams: {
        id: projectId
      }
    });
  }
  paginate(page) {
    this.page = page;
    this.getProjectList();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  static #_ = this.ɵfac = function FeasibilityProjectsListComponent_Factory(t) {
    return new (t || FeasibilityProjectsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_project_service_project_service__WEBPACK_IMPORTED_MODULE_2__.ProjectService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: FeasibilityProjectsListComponent,
    selectors: [["app-feasibility-projects-list"]],
    decls: 40,
    vars: 9,
    consts: [["id", "main"], [1, "container"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-lg-4", "col-xl-4", "col-12", "mob-mb1"], [1, "form-group", "mb-0"], [1, "input-icon"], [1, "bi", "bi-search"], ["placeholder", "Search", "type", "text", 1, "form-control", "control-search", 3, "ngModel", "ngModelChange", "input"], [1, "table-responsive", "mt-5", "mb-3"], [1, "table", "table-striped", "align-middle"], ["width", "200px"], [4, "ngFor", "ngForOf"], [1, "row", "mt-3", "align-items-center"], [1, "row"], [1, "pagination"], [3, "pageChange"], ["v-align", "middle"], ["title", "View Details", 1, "btn", "btn-primarysm", 3, "click"]],
    template: function FeasibilityProjectsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "main", 0)(1, "section")(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function FeasibilityProjectsListComponent_Template_input_ngModelChange_8_listener($event) {
          return ctx.searchText = $event;
        })("input", function FeasibilityProjectsListComponent_Template_input_input_8_listener() {
          return ctx.searchtext();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8)(10, "table", 9)(11, "thead")(12, "tr")(13, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Project Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "BOS ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Publish Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Industry");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Project Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Due Date & Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, FeasibilityProjectsListComponent_tr_34_Template, 25, 15, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](35, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 12)(37, "div", 13)(38, "div", 14)(39, "pagination-controls", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function FeasibilityProjectsListComponent_Template_pagination_controls_pageChange_39_listener($event) {
          return ctx.paginate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](35, 2, ctx.projectList, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](5, _c0, ctx.pagesize, ctx.page, ctx.totalRecords)));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.PaginationControlsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.PaginatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 9976:
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/feasibility-analyst/minimum-eligibility-form/minimum-eligibility-form.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MinimumEligibilityFormComponent: () => (/* binding */ MinimumEligibilityFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);


class MinimumEligibilityFormComponent {
  static #_ = this.ɵfac = function MinimumEligibilityFormComponent_Factory(t) {
    return new (t || MinimumEligibilityFormComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MinimumEligibilityFormComponent,
    selectors: [["app-minimum-eligibility-form"]],
    decls: 95,
    vars: 0,
    consts: [["id", "main"], [1, "p-2"], [1, "container"], [1, "row", "align-items-center", "justify-content-end"], [1, "col-lg-2", "col-xl-2", "col-12"], ["href", "project-list.html", 1, "btn", "btn-outline-secondary", "w-100", "box-shadow"], [1, "table-responsive", "mt-5", "mb-3"], [1, "table", "table-striped", "align-middle"], ["width", "200px"], ["href", "javascript:;"], ["v-align", "middle"], ["href", "javascript:;", 1, "editbtn"], [1, "bi", "bi-pencil-fill"], [1, "form-select", "form-select-sm"], [1, "pageheader", "bg-dark"], [1, "container", "text-center"], [1, "row"], [1, "col-xl-3", "col-lg-3", "col-md-6", "col-sm-6", "col-12"], [1, "form-group"], ["type", "text", 1, "form-control"], [1, "col-xl-4", "col-lg-4", "col-md-6", "col-sm-6", "col-12"], [1, "col-xl-2", "col-lg-2", "col-md-6", "col-sm-6", "col-12"], [1, "display-block"], ["type", "button", 1, "btn", "btn-dark"], [1, "bi", "bi-plus-lg"], [1, "col-12", "text-center"], ["type", "submit", 1, "btn", "btn-dark"]],
    template: function MinimumEligibilityFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "table", 7)(9, "thead")(10, "tr")(11, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Project Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "BOS ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Publish Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Industry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Project Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Due Date & Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tbody")(32, "tr")(33, "td")(34, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Provision of MyBedsLife Student Engagement App Support Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "546552");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "2023-05-31");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Website ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "School ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u00A350000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " In-Progress ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "25-11-2014 & 5:00PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td")(59, "select", 13)(60, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "In-Progress, In Hold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "section", 14)(63, "div", 15)(64, "p")(65, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Minimum Eligibility Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "section")(68, "div", 2)(69, "div", 16)(70, "div", 17)(71, "div", 18)(72, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Case Study Numbers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 20)(76, "div", 18)(77, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Certifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 17)(81, "div", 18)(82, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 21)(86, "div", 18)(87, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 16)(92, "div", 25)(93, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"]],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 1255:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/feasibility-analyst/summary-note-questions/summary-note-questions.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SummaryNoteQuestionsComponent: () => (/* binding */ SummaryNoteQuestionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class SummaryNoteQuestionsComponent {
  static #_ = this.ɵfac = function SummaryNoteQuestionsComponent_Factory(t) {
    return new (t || SummaryNoteQuestionsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SummaryNoteQuestionsComponent,
    selectors: [["app-summary-note-questions"]],
    decls: 2,
    vars: 0,
    template: function SummaryNoteQuestionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "summary-note-questions works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 9335:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/supplier-admin/add-case-study/add-case-study.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddCaseStudyComponent: () => (/* binding */ AddCaseStudyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class AddCaseStudyComponent {
  static #_ = this.ɵfac = function AddCaseStudyComponent_Factory(t) {
    return new (t || AddCaseStudyComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AddCaseStudyComponent,
    selectors: [["app-add-case-study"]],
    decls: 2,
    vars: 0,
    template: function AddCaseStudyComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add-case-study works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 8727:
/*!***********************************************************************!*\
  !*** ./src/app/modules/supplier-admin/add-user/add-user.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddUserComponent: () => (/* binding */ AddUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var src_app_utility_shared_constant_validation_patterns_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utility/shared/constant/validation-patterns.const */ 1113);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_supplier_admin_supplier_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/supplier-admin/supplier-admin.service */ 5938);
/* harmony import */ var src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/notification/notification.service */ 6610);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);








function AddUserComponent_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter User Name. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AddUserComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter email. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AddUserComponent_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter valid email. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AddUserComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter domain. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AddUserComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter department. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class AddUserComponent {
  constructor(supplierService, notificationService, router) {
    this.supplierService = supplierService;
    this.notificationService = notificationService;
    this.router = router;
    this.showLoader = false;
    this.defaultOnboardForm = {
      userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(src_app_utility_shared_constant_validation_patterns_const__WEBPACK_IMPORTED_MODULE_0__.Patterns.email)]),
      domain: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      department: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])
    };
    this.onboardingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup(this.defaultOnboardForm, []);
  }
  ngOnInit() {}
  addManageUser() {
    this.onboardingForm.markAllAsTouched();
    if (!this.onboardingForm.valid) {
      return this.notificationService.showError('Please fill the form all details!');
    }
    this.showLoader = true;
    this.supplierService.addUser(this.onboardingForm.value).subscribe(response => {
      if (response?.status == true) {
        this.showLoader = false;
        this.notificationService.showSuccess('Add User successfully.');
        this.onboardingForm.reset();
      } else {
        this.notificationService.showError(response?.message);
        this.showLoader = false;
      }
    }, error => {
      this.notificationService.showError(error?.message);
      this.showLoader = false;
    });
  }
  static #_ = this.ɵfac = function AddUserComponent_Factory(t) {
    return new (t || AddUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_supplier_admin_supplier_admin_service__WEBPACK_IMPORTED_MODULE_1__.SupplierAdminService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AddUserComponent,
    selectors: [["app-add-user"]],
    decls: 43,
    vars: 6,
    consts: [["id", "main"], [1, "adduser-section"], [1, "container"], [1, "row", "align-items-center", "mb-5"], [1, "col-lg-10", "col-xl-10", "col-md-10", "col-sm-10", "col-8", "mob-mb1"], [1, "text-theme", "mb-4"], [1, "col-lg-2", "col-xl-2", "col-md-4", "col-sm-4", "col-12", "text-end"], ["routerLink", "/supplier-admin/manage-user", 1, "btn", "btn", "btn-link", "text-dark"], [1, "row", "justify-content-center"], [1, "col-lg-6", "col-xl-6", "col-sm-6", "col-md-6", "col-12"], [1, "pt-5", "pb-5", "needs-validation", 3, "formGroup", "ngSubmit"], [1, "row", "mb-3"], [1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "text", "placeholder", "User name", "formControlName", "userName", "required", "", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "placeholder", "Email ID", "id", "email", "formControlName", "email", "required", "", 1, "form-control"], ["type", "text", "placeholder", "Domain", "id", "Firstname", "formControlName", "domain", "required", "", 1, "form-control"], ["type", "text", "placeholder", "Department", "id", "Firstname", "formControlName", "department", "required", "", 1, "form-control"], [1, "col-12", "text-end"], ["type", "submit", 1, "btn", "btn-primary"], [1, "text-danger"]],
    template: function AddUserComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "main", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5)(6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Add Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AddUserComponent_Template_form_ngSubmit_13_listener() {
          return ctx.addManageUser();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 11)(15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, AddUserComponent_span_19_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 11)(21, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Email ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, AddUserComponent_span_25_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, AddUserComponent_span_26_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 11)(28, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Domain");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, AddUserComponent_span_32_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 11)(34, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, AddUserComponent_span_38_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 11)(40, "div", 19)(41, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.onboardingForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.onboardingForm.controls.userName.touched && (ctx.onboardingForm.controls.userName == null ? null : ctx.onboardingForm.controls.userName.errors == null ? null : ctx.onboardingForm.controls.userName.errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.onboardingForm.controls.email.touched && (ctx.onboardingForm.controls.email == null ? null : ctx.onboardingForm.controls.email.errors == null ? null : ctx.onboardingForm.controls.email.errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.onboardingForm.controls.email.touched && (ctx.onboardingForm.controls.email == null ? null : ctx.onboardingForm.controls.email.errors == null ? null : ctx.onboardingForm.controls.email.errors["pattern"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.onboardingForm.controls.domain.touched && (ctx.onboardingForm.controls.domain == null ? null : ctx.onboardingForm.controls.domain.errors == null ? null : ctx.onboardingForm.controls.domain.errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.onboardingForm.controls.department.touched && (ctx.onboardingForm.controls.department == null ? null : ctx.onboardingForm.controls.department.errors == null ? null : ctx.onboardingForm.controls.department.errors["required"]));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 7958:
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/supplier-admin/applied-projects-details/applied-projects-details.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppliedProjectsDetailsComponent: () => (/* binding */ AppliedProjectsDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);


class AppliedProjectsDetailsComponent {
  static #_ = this.ɵfac = function AppliedProjectsDetailsComponent_Factory(t) {
    return new (t || AppliedProjectsDetailsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppliedProjectsDetailsComponent,
    selectors: [["app-applied-projects-details"]],
    decls: 296,
    vars: 0,
    consts: [["id", "main"], [1, "container"], [1, "table-responsive", "mt-5", "mb-3"], [1, "table", "table-striped", "align-middle"], ["width", "200px"], ["href", "javascript:;"], ["v-align", "middle"], [1, "form-select-sm"], [1, "bi", "bi-check-circle-fill", "text-success"], ["href", "", "title", "View Details", 1, "btn", "btn-sm", "btn-dark"], [1, "p-0"], [1, "row", "mb-4"], [1, "text-theme"], [1, "col-12"], [1, "text-theme", "mb-4"], [1, "col-lg-6", "col-xl-6", "col-md-6", "col-12", "mob-mb1"], [1, "card"], [1, "project-document"], [1, "row"], [1, "col-5", "text-center"], [1, "mb-0"], [1, "col-7", "text-center"], ["href", "javascript:;", 1, "btn", "btn-primarysm"], [1, "bi", "bi-eye-fill"], [1, "bi", "bi-file-earmark-arrow-down-fill"], [1, "col-lg-6", "col-xl-6", "col-md-6", "col-12"], [1, "row", "mt-5"], [1, "col-lg-4", "col-xl-4", "col-12", "mb-4"], [1, "card-body"], [1, "row", "align-items-center"], [1, "col-lg-4", "col-xl-4", "col-12"], [1, "col-lg-7", "col-xl-7", "col-12"], [1, "p-13", "mb-0"], [1, "col-lg-4", "col-xl-4", "col-12", "mob-mb1"], [1, "col-lg-4", "col-xl-4", "col-6"], ["href", "", "data-bs-toggle", "modal", "data-bs-target", "#ViewScreenshot", 1, "btn", "btn-small", "w-100"], ["href", "", "data-bs-toggle", "modal", "data-bs-target", "#fioScreenshot", 1, "btn", "btn-small", "w-100"], [1, "bi", "bi-file-earmark-arrow-up-fill"], [1, "row", "align-items-center", "mt-3"], ["href", "", 1, "btn", "btn-small", "w-100"], [1, "card-body", "text-center"], [1, "p-13"], [1, "bg-dark"], [1, "text-white", "mb-4"], [1, "col-lg-8", "col-xl-8", "col-12", "mb-4"], [1, "table", "table-dark", "table-borderless", 2, "background-color", "#252525"], ["width", "350"], [1, "table", "table-dark", "table-borderless"], ["href", "question-details.html", 1, "btn", "btn-small", "w-100"], [1, "container", "text-center"], [1, "btn", "btn-primary", "w-25"]],
    template: function AppliedProjectsDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "section")(2, "div", 1)(3, "div", 2)(4, "table", 3)(5, "thead")(6, "tr")(7, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Project Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "BOS ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Publish Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Industry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Project Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Due Date & Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody")(29, "tr")(30, "td")(31, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Provision of MyBedsLife Student Engagement App Support Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "546552");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "2023-05-31");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "School");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u00A350000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td")(46, "select", 7)(47, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "In-Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "25-11-2014 & 5:00PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " CS(3/3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td")(57, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Shortlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "section", 10)(60, "div", 1)(61, "div", 11)(62, "h4", 12)(63, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Project Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 11)(68, "div", 13)(69, "h4", 14)(70, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 15)(73, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Client Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 16)(76, "ul", 17)(77, "li")(78, "div", 18)(79, "div", 19)(80, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "ITT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 21)(83, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li")(90, "div", 18)(91, "div", 19)(92, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "SQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 21)(95, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li")(102, "div", 18)(103, "div", 19)(104, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "T&C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 21)(107, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li")(114, "div", 18)(115, "div", 19)(116, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Specification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 21)(119, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "li")(126, "div", 18)(127, "div", 19)(128, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Notice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 21)(131, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 25)(138, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "West Gate Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 16)(141, "ul", 17)(142, "li")(143, "div", 18)(144, "div", 19)(145, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Project Notice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 21)(148, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "li")(155, "div", 18)(156, "div", 19)(157, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Ownership Tracker File");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 21)(160, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 26)(167, "div", 27)(168, "div", 16)(169, "div", 28)(170, "div", 29)(171, "div", 30)(172, "h6", 12)(173, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Client Detils");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 31)(176, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Mail ID : abc@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Client Type : Private Sector");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Client Name : XYZ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 27)(183, "div", 29)(184, "div", 33)(185, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "FIO Screenshot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 34)(188, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 34)(192, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 38)(196, "div", 33)(197, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "FIO Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 34)(200, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 34)(204, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 27)(208, "div", 16)(209, "div", 40)(210, "p", 41)(211, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Period of Contract: Start Date - End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "p", 41)(214, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Project Type: Developement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "section", 42)(217, "div", 1)(218, "div", 18)(219, "div", 13)(220, "h5", 43)(221, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Summary Note Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 18)(224, "div", 44)(225, "table", 45)(226, "thead")(227, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Weightage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Deadline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "tbody")(236, "tr")(237, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "1. Project management approach and project team outlined. Resilience \u2013 ability to deliver.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "35%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Not Verified");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "01-02-2014");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "tr")(246, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "1. Project management approach and project team outlined. Resilience \u2013 ability to deliver.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "35%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Not Verified");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "01-02-2014");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "tr")(255, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "1. Project management approach and project team outlined. Resilience \u2013 ability to deliver.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "35%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Not Verified");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "01-02-2014");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 27)(264, "table", 47)(265, "thead")(266, "tr")(267, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "Review Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "tbody")(271, "tr")(272, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, " dolor sit amet, consectetur......");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "td")(275, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, " View Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "tr")(279, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, " dolor sit amet, consectetur......");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "td")(282, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " View Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "tr")(286, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, " dolor sit amet, consectetur......");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "td")(289, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, " View Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "section")(293, "div", 49)(294, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"]],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 8426:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/supplier-admin/case-studies/case-studies.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CaseStudiesComponent: () => (/* binding */ CaseStudiesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utility/shared/constant/pagination.constant */ 7005);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_supplier_admin_supplier_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/supplier-admin/supplier-admin.service */ 5938);
/* harmony import */ var src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/notification/notification.service */ 6610);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ 1060);









function CaseStudiesComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44)(1, "div", 45)(2, "div", 46)(3, "div", 26)(4, "p", 47)(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 48)(8, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 50)(11, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CaseStudiesComponent_div_52_Template_a_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.openDocument(item_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " View");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CaseStudiesComponent_div_52_Template_a_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.download(item_r1 == null ? null : item_r1.link == null ? null : item_r1.link.url, item_r1 == null ? null : item_r1.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.name);
  }
}
const _c0 = function (a0, a1, a2) {
  return {
    itemsPerPage: a0,
    currentPage: a1,
    totalItems: a2
  };
};
class CaseStudiesComponent {
  constructor(supplierService, notificationService, router) {
    this.supplierService = supplierService;
    this.notificationService = notificationService;
    this.router = router;
    this.showLoader = false;
    this.caseStudyList = [];
    this.page = src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__.pagination.page;
    this.pagesize = src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__.pagination.itemsPerPage;
    this.totalRecords = src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__.pagination.totalRecords;
    this.casestudyForm = {
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(""),
      category: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(""),
      subCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(""),
      file: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("")
    };
    this.caseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup(this.casestudyForm, []);
  }
  ngOnInit() {
    this.getCaseStudiesList();
  }
  getCaseStudiesList() {
    this.showLoader = true;
    this.supplierService.getCaseStudyList().subscribe(response => {
      this.caseStudyList = [];
      this.totalRecords = 0;
      if (response?.status == true) {
        this.showLoader = false;
        this.caseStudyList = response?.data?.data;
        console.log(this.caseStudyList);
        this.totalRecords = response?.totalCount;
      } else {
        this.notificationService.showError(response?.message);
        this.showLoader = false;
      }
    }, error => {
      this.notificationService.showError(error?.message);
      this.showLoader = false;
    });
  }
  addCaseStudy() {
    const data = new FormData();
    data.append('name', this.caseForm.controls.name.value || '');
    data.append('category', this.caseForm.controls.category.value || '');
    data.append('subCategory', this.caseForm.controls.subCategory.value || '');
    data.append('file', this.imageToUpload || '');
    this.showLoader = true;
    this.supplierService.addCaseStudy(data).subscribe(response => {
      if (response?.status == true) {
        this.showLoader = false;
        this.notificationService.showSuccess('Reply add successfully.');
        window.location.reload();
      } else {
        this.notificationService.showError(response?.message);
        this.showLoader = false;
      }
    }, error => {
      this.notificationService.showError(error?.message);
      this.showLoader = false;
    });
  }
  // Handle the file change event
  addFiles(event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.imageToUpload = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => {
        this.imageSrc = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
  paginate(page) {
    this.page = page;
    this.getCaseStudiesList();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  openDocument(data) {
    this.selectedDocument = data;
  }
  download(imageUrl, fileName) {
    fetch(imageUrl).then(response => response.blob()).then(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName); // You can customize the filename here
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
  static #_ = this.ɵfac = function CaseStudiesComponent_Factory(t) {
    return new (t || CaseStudiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_supplier_admin_supplier_admin_service__WEBPACK_IMPORTED_MODULE_1__.SupplierAdminService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CaseStudiesComponent,
    selectors: [["app-case-studies"]],
    decls: 67,
    vars: 11,
    consts: [["id", "main"], [1, "casestudy-section"], [1, "container"], [1, "text-theme", "mb-4"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-lg-4", "col-xl-4", "col-12"], [1, "row", "mb-3"], ["for", "colFormLabel", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "text", "placeholder", " name", "formControlName", "name", "required", "", 1, "form-control"], [1, "row", "mb-2"], ["formControlName", "category", 1, "form-select"], ["value", "", "disabled", "", "selected", "", "hidden", ""], ["value", "WebDevelopment"], ["for", "colFormLabel", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["formControlName", "subCategory", 1, "form-select"], ["value", "ReactJs"], [1, "col-lg-3", "col-xl-3", "col-12", "text-end"], [1, "upload-btn-wrapper"], ["for", "fileInput", 1, "btn-upload-file"], [1, "bi", "bi-file-earmark-arrow-up-fill"], ["type", "file", "id", "fileInput", "name", "myfile", 2, "height", "10px", "width", "10px", 3, "change"], ["type", "submit", 1, "btn", "btn-dark", "me-2"], [1, "row", "justify-content-end"], [1, "col-lg-2", "col-xl-2", "col-12"], [1, "form-group"], [1, "input-icon"], [1, "bi", "bi-filter"], [1, "form-select", "ps-5"], [1, "p-0"], ["class", "card card-gradient1 border-radius16 mb-4", 4, "ngFor", "ngForOf"], [1, "row", "mt-3", "align-items-center"], [1, "pagination"], [3, "pageChange"], ["id", "ViewScreenshot", "tabindex", "-1", "aria-labelledby", "ViewScreenshotLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "ViewScreenshotLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "img-fluid", 3, "src"], [1, "card", "card-gradient1", "border-radius16", "mb-4"], [1, "card-body"], [1, "row", "align-items-center"], [1, "mb-0"], [1, "col-lg-7", "col-xl-7", "col-12"], [1, "mb-0", "p-13"], [1, "col-lg-3", "col-xl-3", "col-12", "text-center"], ["href", "javascript:;", "data-bs-toggle", "modal", "data-bs-target", "#ViewScreenshot", 1, "btn", "btn-primarysm", 3, "click"], [1, "bi", "bi-eye-fill"], ["href", "javascript:;", 1, "btn", "btn-primarysm", "me-2", 3, "click"], [1, "bi", "bi-file-earmark-arrow-down-fill"]],
    template: function CaseStudiesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "main", 0)(1, "section", 1)(2, "div", 2)(3, "h4", 3)(4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Case Studies");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function CaseStudiesComponent_Template_form_ngSubmit_6_listener() {
          return ctx.addCaseStudy();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 6)(15, "div", 11)(16, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 9)(19, "select", 12)(20, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Select Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Web Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 6)(25, "div", 7)(26, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Sub-Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 16)(29, "select", 17)(30, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Select Sub-Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "React Js");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 19)(35, "div", 20)(36, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, " Upload Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CaseStudiesComponent_Template_input_change_39_listener($event) {
          return ctx.addFiles($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 25)(43, "div", 26)(44, "div", 27)(45, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "select", 30)(48, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Filter By");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "section", 31)(51, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, CaseStudiesComponent_div_52_Template, 17, 2, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](53, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 33)(55, "div", 5)(56, "div", 34)(57, "pagination-controls", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pageChange", function CaseStudiesComponent_Template_pagination_controls_pageChange_57_listener($event) {
          return ctx.paginate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 36)(59, "div", 37)(60, "div", 38)(61, "div", 39)(62, "h5", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.caseForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](53, 4, ctx.caseStudyList, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](7, _c0, ctx.pagesize, ctx.page, ctx.totalRecords)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("FOI Screenshot ", ctx.selectedDocument == null ? null : ctx.selectedDocument.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.selectedDocument == null ? null : ctx.selectedDocument.link == null ? null : ctx.selectedDocument.link.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, ngx_pagination__WEBPACK_IMPORTED_MODULE_7__.PaginationControlsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, ngx_pagination__WEBPACK_IMPORTED_MODULE_7__.PaginatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 9375:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/supplier-admin/expired-project/expired-project.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpiredProjectComponent: () => (/* binding */ ExpiredProjectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ExpiredProjectComponent {
  static #_ = this.ɵfac = function ExpiredProjectComponent_Factory(t) {
    return new (t || ExpiredProjectComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ExpiredProjectComponent,
    selectors: [["app-expired-project"]],
    decls: 61,
    vars: 0,
    consts: [["id", "main"], [1, "container"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-lg-4", "col-xl-4", "col-12", "mob-mb1"], [1, "form-group", "mb-0"], [1, "input-icon"], [1, "bi", "bi-search"], ["type", "search", "placeholder", "Search", 1, "form-control", "control-search"], [1, "table-responsive", "mt-5", "mb-3"], [1, "table", "table-striped", "align-middle"], ["width", "200px"], ["href", "javascript:;"], ["v-align", "middle"], [1, "bi", "bi-check-circle-fill", "text-success"], ["href", "", "title", "View Details", 1, "btn", "btn-sm", "btn-primarysm"]],
    template: function ExpiredProjectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "section")(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8)(10, "table", 9)(11, "thead")(12, "tr")(13, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Project Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "BOS ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Publish Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Industry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Project Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Due Date & Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tbody")(35, "tr")(36, "td")(37, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Provision of MyBedsLife Student Engagement App Support Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "546552");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "2023-05-31");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "School");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u00A350000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "In-Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "25-11-2014 & 5:00PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " CS(3/3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td")(59, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "View Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 3335:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/supplier-admin/manage-user/manage-user.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManageUserComponent: () => (/* binding */ ManageUserComponent)
/* harmony export */ });
/* harmony import */ var src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utility/shared/constant/pagination.constant */ 7005);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 7889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_supplier_admin_supplier_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/supplier-admin/supplier-admin.service */ 5938);
/* harmony import */ var src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notification/notification.service */ 6610);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ 1060);








function ManageUserComponent_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td")(5, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td")(8, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td")(20, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManageUserComponent_tr_30_Template_button_click_20_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.deleteUser(item_r1 == null ? null : item_r1._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.domain);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.department);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](18, 6, item_r1 == null ? null : item_r1.doj, "MM/dd/YYYY"));
  }
}
const _c0 = function (a0, a1, a2) {
  return {
    itemsPerPage: a0,
    currentPage: a1,
    totalItems: a2
  };
};
class ManageUserComponent {
  constructor(supplierService, notificationService, router) {
    this.supplierService = supplierService;
    this.notificationService = notificationService;
    this.router = router;
    this.showLoader = false;
    this.manageUserList = [];
    this.page = src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__.pagination.page;
    this.pagesize = src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__.pagination.itemsPerPage;
    this.totalRecords = src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__.pagination.totalRecords;
  }
  ngOnInit() {
    this.getManageUserList();
  }
  getManageUserList() {
    this.showLoader = true;
    this.supplierService.getManageUserList().subscribe(response => {
      this.manageUserList = [];
      this.totalRecords = 0;
      if (response?.status == true) {
        this.showLoader = false;
        this.manageUserList = response?.data?.data;
        this.totalRecords = response?.totalCount;
      } else {
        this.notificationService.showError(response?.message);
        this.showLoader = false;
      }
    }, error => {
      this.notificationService.showError(error?.message);
      this.showLoader = false;
    });
  }
  deleteUser(id) {
    let params = {
      "id": id
    };
    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
      title: 'Are you sure?',
      text: `Do you want to delete `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00B96F',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete!'
    }).then(result => {
      if (result?.value) {
        this.showLoader = true;
        this.supplierService.deleteUser(params).subscribe(response => {
          if (response?.status == true) {
            this.showLoader = false;
            this.notificationService.showSuccess('User successfully deleted');
            this.getManageUserList();
          } else {
            this.showLoader = false;
            this.notificationService.showError(response?.message);
          }
        }, error => {
          this.showLoader = false;
          this.notificationService.showError(error?.message);
        });
      }
    });
  }
  static #_ = this.ɵfac = function ManageUserComponent_Factory(t) {
    return new (t || ManageUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_supplier_admin_supplier_admin_service__WEBPACK_IMPORTED_MODULE_2__.SupplierAdminService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ManageUserComponent,
    selectors: [["app-manage-user"]],
    decls: 32,
    vars: 8,
    consts: [["id", "main"], [1, "container"], [1, "row"], [1, "col-lg-10", "col-xl-10", "col-md-10", "col-sm-10", "col-8"], [1, "text-theme", "mb-4"], [1, "col-lg-2", "col-xl-2", "col-md-2", "col-sm-2", "col-4"], ["routerLink", "/supplier-admin/add-user", 1, "btn", "btn-primary", "w-100"], [1, "table-responsive"], [1, "table", "table-striped", "align-middle"], [4, "ngFor", "ngForOf"], [1, "avtar32"], ["src", "assets/img/face1.jpg"], ["href", "javascript:;"], [1, "btn", "btn-sm", "btn-secondary", 3, "click"]],
    template: function ManageUserComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "main", 0)(1, "section")(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h4", 4)(6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5)(9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 7)(12, "table", 8)(13, "thead")(14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Mail ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "User ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Domain");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Joined");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, ManageUserComponent_tr_30_Template, 22, 9, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](31, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](31, 1, ctx.manageUserList, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](4, _c0, ctx.pagesize, ctx.page, ctx.totalRecords)));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_7__.PaginatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 3486:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/supplier-admin/projects-all/projects-all.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsAllComponent: () => (/* binding */ ProjectsAllComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 655);
/* harmony import */ var src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utility/shared/constant/pagination.constant */ 7005);
/* harmony import */ var src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utility/shared/constant/payload.const */ 5557);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_project_service_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/project-service/project.service */ 1887);
/* harmony import */ var src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notification/notification.service */ 6610);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/local-storage/local-storage.service */ 1021);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ 1060);












function ProjectsAllComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " CS(3/3)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "td")(26, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsAllComponent_tr_35_Template_a_click_26_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.projectDetails(item_r1 == null ? null : item_r1._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "View Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsAllComponent_tr_35_Template_a_click_28_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.sortListProject(item_r1 == null ? null : item_r1._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Shortlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.projectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.BOSID);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](8, 9, item_r1 == null ? null : item_r1.publishDate, "MM/dd/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.industry);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.projectType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](21, 12, item_r1 == null ? null : item_r1.dueDate, "MM/dd/yyyy, h:mm a"));
  }
}
const _c0 = function (a0, a1, a2) {
  return {
    itemsPerPage: a0,
    currentPage: a1,
    totalItems: a2
  };
};
class ProjectsAllComponent {
  constructor(projectService, notificationService, router, localStorageService) {
    this.projectService = projectService;
    this.notificationService = notificationService;
    this.router = router;
    this.localStorageService = localStorageService;
    this.showLoader = false;
    this.projectList = [];
    this.page = src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__.pagination.page;
    this.pagesize = src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__.pagination.itemsPerPage;
    this.totalRecords = src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__.pagination.totalRecords;
    this.searchText = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('');
    this.loginUser = this.localStorageService.getLogger();
  }
  ngOnInit() {
    this.searchText.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(500)).subscribe(result => {
      console.log('result', result);
      this.getProjectList();
    });
    this.getProjectList();
  }
  getProjectList() {
    this.showLoader = true;
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.keyword = String(this.searchText?.value) || "";
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.page = String(this.page);
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.limit = String(this.pagesize);
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.applied = false;
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.sortlist = false;
    this.projectService.getProjectList(src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList).subscribe(response => {
      this.projectList = [];
      this.totalRecords = 0;
      if (response?.status == true) {
        this.showLoader = false;
        this.projectList = response?.data?.data;
      } else {
        this.notificationService.showError(response?.message);
        this.showLoader = false;
      }
    }, error => {
      this.notificationService.showError(error?.message);
      this.showLoader = false;
    });
  }
  projectDetails(projectId) {
    this.router.navigate(['/supplier-admin/projects-details'], {
      queryParams: {
        id: projectId
      }
    });
  }
  paginate(page) {
    this.page = page;
    this.getProjectList();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  sortListProject(projectId) {
    const payload = {
      userId: this.loginUser.id,
      projectId: projectId
    };
    this.projectService.projectSortList(payload).subscribe(response => {
      if (response?.status) {
        this.notificationService.showSuccess(response?.message);
        this.getProjectList();
      } else {
        return this.notificationService.showError(response?.message);
      }
    }, error => {
      return this.notificationService.showError(error?.message || 'Something went wrong !');
    });
  }
  static #_ = this.ɵfac = function ProjectsAllComponent_Factory(t) {
    return new (t || ProjectsAllComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_project_service_project_service__WEBPACK_IMPORTED_MODULE_2__.ProjectService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ProjectsAllComponent,
    selectors: [["app-projects-all"]],
    decls: 41,
    vars: 9,
    consts: [["id", "main"], [1, "container-fluid"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-lg-4", "col-xl-4", "col-12", "mob-mb1"], [1, "form-group", "mb-0"], [1, "input-icon"], [1, "bi", "bi-search"], ["type", "search", "placeholder", "Search", 1, "form-control", "control-search", 3, "formControl"], [1, "table-responsive", "mt-5", "mb-3"], [1, "table", "table-striped", "align-middle"], ["width", "200px"], [4, "ngFor", "ngForOf"], [1, "row", "mt-3", "align-items-center"], [1, "row"], [1, "pagination"], [3, "pageChange"], ["v-align", "middle"], [1, "bi", "bi-check-circle-fill", "text-success"], ["title", "View Details", 1, "btn", "btn-sm", "btn-primary", "m-1", 3, "click"], ["title", "Shortlist", 1, "btn", "btn-sm", "btn-dark", "m-1", 3, "click"]],
    template: function ProjectsAllComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "main", 0)(1, "section")(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 8)(10, "table", 9)(11, "thead")(12, "tr")(13, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Project Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "BOS ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Publish Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Industry");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Project Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Due Date & Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, ProjectsAllComponent_tr_35_Template, 30, 15, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](36, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 12)(38, "div", 13)(39, "div", 14)(40, "pagination-controls", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function ProjectsAllComponent_Template_pagination_controls_pageChange_40_listener($event) {
          return ctx.paginate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](36, 2, ctx.projectList, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](5, _c0, ctx.pagesize, ctx.page, ctx.totalRecords)));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, ngx_pagination__WEBPACK_IMPORTED_MODULE_10__.PaginationControlsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_10__.PaginatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 6741:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/supplier-admin/projects-applied/projects-applied.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsAppliedComponent: () => (/* binding */ ProjectsAppliedComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 655);
/* harmony import */ var src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utility/shared/constant/pagination.constant */ 7005);
/* harmony import */ var src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utility/shared/constant/payload.const */ 5557);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_project_service_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/project-service/project.service */ 1887);
/* harmony import */ var src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notification/notification.service */ 6610);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ 1060);











function ProjectsAppliedComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "td")(23, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProjectsAppliedComponent_tr_41_Template_a_click_23_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.projectDetails(item_r1 == null ? null : item_r1._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "View Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, " Chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.projectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.BOSID);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](8, 9, item_r1 == null ? null : item_r1.publishDate, "MM/dd/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.industry);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.projectType);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](21, 12, item_r1 == null ? null : item_r1.dueDate, "MM/dd/yyyy, h:mm a"));
  }
}
const _c0 = function (a0, a1, a2) {
  return {
    itemsPerPage: a0,
    currentPage: a1,
    totalItems: a2
  };
};
class ProjectsAppliedComponent {
  constructor(projectService, notificationService, router) {
    this.projectService = projectService;
    this.notificationService = notificationService;
    this.router = router;
    this.showLoader = false;
    this.projectList = [];
    this.page = src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__.pagination.page;
    this.pagesize = src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__.pagination.itemsPerPage;
    this.totalRecords = src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__.pagination.totalRecords;
    this.searchText = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('');
  }
  ngOnInit() {
    this.searchText.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(500)).subscribe(result => {
      console.log('result', result);
      this.getProjectList();
    });
    this.getProjectList();
  }
  getProjectList() {
    this.showLoader = true;
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.keyword = String(this.searchText?.value) || "";
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.page = String(this.page);
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.limit = String(this.pagesize);
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.applied = true;
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.sortlist = false;
    this.projectService.getProjectList(src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList).subscribe(response => {
      this.projectList = [];
      this.totalRecords = 0;
      if (response?.status == true) {
        this.showLoader = false;
        this.projectList = response?.data?.data;
      } else {
        this.notificationService.showError(response?.message);
        this.showLoader = false;
      }
    }, error => {
      this.notificationService.showError(error?.message);
      this.showLoader = false;
    });
  }
  projectDetails(projectId) {
    this.router.navigate(['/supplier-admin/projects-details'], {
      queryParams: {
        id: projectId
      }
    });
  }
  paginate(page) {
    this.page = page;
    this.getProjectList();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  static #_ = this.ɵfac = function ProjectsAppliedComponent_Factory(t) {
    return new (t || ProjectsAppliedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_project_service_project_service__WEBPACK_IMPORTED_MODULE_2__.ProjectService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ProjectsAppliedComponent,
    selectors: [["app-projects-applied"]],
    decls: 47,
    vars: 9,
    consts: [["id", "main"], [1, "container-fluid"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-lg-4", "col-xl-4", "col-12", "mob-mb1"], [1, "form-group", "mb-0"], [1, "input-icon"], [1, "bi", "bi-search"], ["type", "search", "placeholder", "Search", 1, "form-control", "control-search", 3, "formControl"], [1, "col-lg-2", "col-xl-2", "col-12"], [1, "form-group"], [1, "bi", "bi-filter"], [1, "form-select", "ps-5"], [1, "table-responsive", "mt-5", "mb-3"], [1, "table", "table-striped", "align-middle"], ["width", "200px"], [4, "ngFor", "ngForOf"], [1, "row", "mt-3", "align-items-center"], [1, "row"], [1, "pagination"], [3, "pageChange"], ["v-align", "middle"], ["title", "View Details", 1, "btn", "btn-sm", "btn-primary", "m-1", 3, "click"], ["routerLink", "/supplier-admin/chat", "title", "Shortlist", 1, "btn", "btn-sm", "btn-primary", "m-1"], [1, "bi", "bi-chat-dots"]],
    template: function ProjectsAppliedComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "main", 0)(1, "section")(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "select", 11)(14, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Filter By");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 12)(17, "table", 13)(18, "thead")(19, "tr")(20, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Project Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "BOS ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Publish Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Industry");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Project Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Due Date & Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, ProjectsAppliedComponent_tr_41_Template, 28, 15, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](42, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 16)(44, "div", 17)(45, "div", 18)(46, "pagination-controls", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function ProjectsAppliedComponent_Template_pagination_controls_pageChange_46_listener($event) {
          return ctx.paginate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](42, 2, ctx.projectList, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](5, _c0, ctx.pagesize, ctx.page, ctx.totalRecords)));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, ngx_pagination__WEBPACK_IMPORTED_MODULE_9__.PaginationControlsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_9__.PaginatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 7903:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/supplier-admin/projects-details/projects-details.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsDetailsComponent: () => (/* binding */ ProjectsDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_project_service_project_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/project-service/project.service */ 1887);
/* harmony import */ var src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/notification/notification.service */ 6610);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/local-storage/local-storage.service */ 1021);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);






const _c0 = ["downloadLink"];
function ProjectsDetailsComponent_ng_container_75_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li")(1, "div", 32)(2, "div", 50)(3, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "ITT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 51)(6, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " View");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
}
function ProjectsDetailsComponent_ng_container_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProjectsDetailsComponent_ng_container_75_li_1_Template, 12, 0, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.projectDetails == null ? null : ctx_r0.projectDetails.clientDocument);
  }
}
function ProjectsDetailsComponent_ng_container_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "li", 54)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "No Record Found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function ProjectsDetailsComponent_ng_container_82_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li")(1, "div", 32)(2, "div", 50)(3, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Project Notice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 51)(6, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " View");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
}
function ProjectsDetailsComponent_ng_container_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProjectsDetailsComponent_ng_container_82_li_1_Template, 12, 0, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.projectDetails == null ? null : ctx_r2.projectDetails.westGetDocument);
  }
}
function ProjectsDetailsComponent_ng_container_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "li", 54)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "No Record Found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function ProjectsDetailsComponent_div_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21)(1, "div", 55)(2, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "No Record Found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function ProjectsDetailsComponent_ng_container_105_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21)(1, "div", 25)(2, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 57)(5, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProjectsDetailsComponent_ng_container_105_div_1_Template_a_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const foiDocument_r11 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.openDocument(foiDocument_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " View");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 57)(9, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProjectsDetailsComponent_ng_container_105_div_1_Template_a_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const foiDocument_r11 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.download(foiDocument_r11 == null ? null : foiDocument_r11.link == null ? null : foiDocument_r11.link.url, foiDocument_r11 == null ? null : foiDocument_r11.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const foiDocument_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](foiDocument_r11 == null ? null : foiDocument_r11.name);
  }
}
function ProjectsDetailsComponent_ng_container_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProjectsDetailsComponent_ng_container_105_div_1_Template, 12, 1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.projectDetails == null ? null : ctx_r5.projectDetails.fois);
  }
}
class ProjectsDetailsComponent {
  constructor(projectService, notificationService, router, route, localStorageService) {
    this.projectService = projectService;
    this.notificationService = notificationService;
    this.router = router;
    this.route = route;
    this.localStorageService = localStorageService;
    this.showLoader = false;
    this.projectDetails = [];
    this.projectId = '';
    this.currentDate = new Date();
    this.route.queryParams.subscribe(params => {
      this.projectId = params['id'];
    });
    this.loginUser = this.localStorageService.getLogger();
  }
  ngOnInit() {
    this.getProjectDetails();
  }
  formatMilliseconds(milliseconds) {
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    return `${days} days`;
  }
  getProjectDetails() {
    this.showLoader = true;
    this.projectService.getProjectDetailsById(this.projectId).subscribe(response => {
      if (response?.status == true) {
        this.showLoader = false;
        this.projectDetails = response?.data;
        const dueDate = new Date(this.projectDetails?.dueDate);
        const currentDate = new Date();
        const dateDifference = Math.abs(dueDate.getTime() - currentDate.getTime());
        const formattedDateDifference = this.formatMilliseconds(dateDifference);
        this.dateDifference = formattedDateDifference;
      } else {
        this.notificationService.showError(response?.message);
        this.showLoader = false;
      }
    }, error => {
      this.notificationService.showError(error?.message);
      this.showLoader = false;
    });
  }
  openDocument(data) {
    this.selectedDocument = data;
  }
  download(imageUrl, fileName) {
    fetch(imageUrl).then(response => response.blob()).then(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName); // You can customize the filename here
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
  applyProject() {
    const payload = {
      userId: this.loginUser.id,
      projectId: this.projectId
    };
    this.projectService.projectApply(payload).subscribe(response => {
      if (response?.status) {
        this.notificationService.showSuccess(response?.message);
      } else {
        return this.notificationService.showError(response?.message);
      }
    }, error => {
      return this.notificationService.showError(error?.message || 'Something went wrong !');
    });
  }
  static #_ = this.ɵfac = function ProjectsDetailsComponent_Factory(t) {
    return new (t || ProjectsDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_project_service_project_service__WEBPACK_IMPORTED_MODULE_0__.ProjectService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ProjectsDetailsComponent,
    selectors: [["app-projects-details"]],
    viewQuery: function ProjectsDetailsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.downloadLink = _t.first);
      }
    },
    decls: 198,
    vars: 36,
    consts: [["id", "main"], [1, "container-fluid"], [1, "table-responsive", "mt-5", "mb-3"], [1, "table", "table-striped", "align-middle"], ["width", "200px"], ["v-align", "middle"], [1, "bi", "bi-check-circle-fill", "text-success"], ["href", "javascript:;", "title", "Shortlist", 1, "btn", "btn-sm", "btn-dark"], [1, "p-0"], [1, "row", "mb-4"], [1, "text-theme"], [1, "col-12"], [1, "text-theme", "mb-4"], [1, "col-lg-6", "col-xl-6", "col-md-6", "col-12", "mob-mb1"], [1, "card"], [1, "project-document"], [4, "ngIf"], [1, "col-lg-6", "col-xl-6", "col-md-6", "col-12"], [1, "row", "mt-5"], [1, "col-lg-4", "col-xl-4", "col-12", "mb-4"], [1, "card-body"], [1, "row", "align-items-center"], [1, "col-lg-4", "col-xl-4", "col-12"], [1, "col-lg-7", "col-xl-7", "col-12"], [1, "p-13", "mb-0"], [1, "col-lg-4", "col-xl-4", "col-12", "mob-mb1"], [1, "mb-0"], ["class", "row align-items-center", 4, "ngIf"], [1, "card-body", "text-center"], [1, "p-13"], [1, "bg-dark"], [1, "container"], [1, "row"], [1, "text-white", "mb-4"], [1, "col-12", "mb-4"], [1, "table", "table-dark", "table-borderless", 2, "background-color", "#252525"], ["width", "350"], ["href", "question-details.html", 1, "btn", "btn-small", "w-100"], [1, "bi", "bi-eye-fill"], [1, "container", "text-center"], [1, "btn", "btn-primary", "w-25", 3, "click"], ["id", "ViewScreenshot", "tabindex", "-1", "aria-labelledby", "ViewScreenshotLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "ViewScreenshotLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "img-fluid", 3, "src"], [4, "ngFor", "ngForOf"], [1, "col-5", "text-center"], [1, "col-7", "text-center"], ["href", "javascript:;", 1, "btn", "btn-primarysm"], [1, "bi", "bi-file-earmark-arrow-down-fill"], [2, "text-align", "center"], [1, "col-lg-12", "col-xl-12", "col-12", "mob-mb1"], ["class", "row align-items-center", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-xl-4", "col-6"], ["data-bs-toggle", "modal", "data-bs-target", "#ViewScreenshot", 1, "btn", "btn-small", "w-100", 3, "click"], ["target", "_blank", 1, "btn", "btn-small", "w-100", 3, "click"]],
    template: function ProjectsDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "main", 0)(1, "section")(2, "div", 1)(3, "div", 2)(4, "table", 3)(5, "thead")(6, "tr")(7, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Project Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "BOS ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Publish Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Industry");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Project Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Due Date & Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "tbody")(29, "tr")(30, "td")(31, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](37, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](50, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, " CS(3/3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "td")(55, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Shortlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "section", 8)(58, "div", 1)(59, "div", 9)(60, "h4", 10)(61, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Project Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 9)(66, "div", 11)(67, "h4", 12)(68, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 13)(71, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "Client Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 14)(74, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](75, ProjectsDetailsComponent_ng_container_75_Template, 2, 1, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](76, ProjectsDetailsComponent_ng_container_76_Template, 4, 0, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 17)(78, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "West Gate Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 14)(81, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](82, ProjectsDetailsComponent_ng_container_82_Template, 2, 1, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](83, ProjectsDetailsComponent_ng_container_83_Template, 4, 0, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 18)(85, "div", 19)(86, "div", 14)(87, "div", 20)(88, "div", 21)(89, "div", 22)(90, "h6", 10)(91, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "Client Detils");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 23)(94, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "div", 19)(101, "div", 25)(102, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, "FOI Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](104, ProjectsDetailsComponent_div_104_Template, 4, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](105, ProjectsDetailsComponent_ng_container_105_Template, 2, 1, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 19)(107, "div", 14)(108, "div", 28)(109, "p", 29)(110, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](112, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](113, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "p", 29)(115, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "section", 30)(118, "div", 31)(119, "div", 32)(120, "div", 11)(121, "h5", 33)(122, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "Summary Note Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "div", 32)(125, "div", 34)(126, "table", 35)(127, "thead")(128, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](129, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](131, "Weightage");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](133, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "Deadline");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "Review Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](138, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "tbody")(140, "tr")(141, "td", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](142, "1. Project management approach and project team outlined. Resilience \u2013 ability to deliver.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, "35%");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, "Not Verified");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](148, "01-02-2014");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, " dolor sit amet, consectetur......");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "td")(152, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](153, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](154, " View Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "tr")(156, "td", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, "1. Project management approach and project team outlined. Resilience \u2013 ability to deliver.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](159, "35%");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](161, "Not Verified");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163, "01-02-2014");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](165, " dolor sit amet, consectetur......");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](166, "td")(167, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](168, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](169, " View Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "tr")(171, "td", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](172, "1. Project management approach and project team outlined. Resilience \u2013 ability to deliver.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](174, "35%");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](176, "Not Verified");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](178, "01-02-2014");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](179, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](180, " dolor sit amet, consectetur......");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](181, "td")(182, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](183, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](184, " View Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](185, "section")(186, "div", 39)(187, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProjectsDetailsComponent_Template_button_click_187_listener() {
          return ctx.applyProject();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](188, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "div", 41)(190, "div", 42)(191, "div", 43)(192, "div", 44)(193, "h5", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](194);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](195, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](196, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](197, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.projectDetails == null ? null : ctx.projectDetails.projectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.projectDetails == null ? null : ctx.projectDetails.BOSID);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](37, 24, ctx.projectDetails == null ? null : ctx.projectDetails.publishDate, "MM/dd/yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.projectDetails == null ? null : ctx.projectDetails.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.projectDetails == null ? null : ctx.projectDetails.industry);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.projectDetails == null ? null : ctx.projectDetails.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.projectDetails == null ? null : ctx.projectDetails.projectType);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.projectDetails == null ? null : ctx.projectDetails.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](50, 27, ctx.projectDetails == null ? null : ctx.projectDetails.dueDate, "MM/dd/yyyy, h:mm a"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.projectDetails == null ? null : ctx.projectDetails.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.projectDetails == null ? null : ctx.projectDetails.clientDocument == null ? null : ctx.projectDetails.clientDocument.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.projectDetails == null ? null : ctx.projectDetails.clientDocument == null ? null : ctx.projectDetails.clientDocument.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.projectDetails == null ? null : ctx.projectDetails.westGetDocument == null ? null : ctx.projectDetails.westGetDocument.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.projectDetails == null ? null : ctx.projectDetails.westGetDocument == null ? null : ctx.projectDetails.westGetDocument.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Mail ID : ", ctx.projectDetails == null ? null : ctx.projectDetails.mailID, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Client Type : ", ctx.projectDetails == null ? null : ctx.projectDetails.clientType, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Client Name : ", ctx.projectDetails == null ? null : ctx.projectDetails.clientName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.projectDetails == null ? null : ctx.projectDetails.fois == null ? null : ctx.projectDetails.fois.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.projectDetails == null ? null : ctx.projectDetails.fois == null ? null : ctx.projectDetails.fois.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("Period of Contract: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](112, 30, ctx.projectDetails == null ? null : ctx.projectDetails.periodOfContractStart, "MM/dd/yyyy"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](113, 33, ctx.projectDetails == null ? null : ctx.projectDetails.periodOfContractEnd, "MM/dd/yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Project Type: ", ctx.projectDetails == null ? null : ctx.projectDetails.projectType, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("FOI Document : ", ctx.selectedDocument == null ? null : ctx.selectedDocument.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.selectedDocument == null ? null : ctx.selectedDocument.link == null ? null : ctx.selectedDocument.link.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 4122:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/supplier-admin/projects-matched/projects-matched.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsMatchedComponent: () => (/* binding */ ProjectsMatchedComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 655);
/* harmony import */ var src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utility/shared/constant/pagination.constant */ 7005);
/* harmony import */ var src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utility/shared/constant/payload.const */ 5557);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_project_service_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/project-service/project.service */ 1887);
/* harmony import */ var src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notification/notification.service */ 6610);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/local-storage/local-storage.service */ 1021);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ 1060);












function ProjectsMatchedComponent_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " CS(3/3)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "td")(26, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsMatchedComponent_tr_44_Template_a_click_26_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.projectDetails(item_r1 == null ? null : item_r1._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "View Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsMatchedComponent_tr_44_Template_a_click_28_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.sortListProject(item_r1 == null ? null : item_r1._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Shortlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.projectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.BOSID);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](8, 9, item_r1 == null ? null : item_r1.publishDate, "MM/dd/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.industry);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.projectType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](21, 12, item_r1 == null ? null : item_r1.dueDate, "MM/dd/yyyy, h:mm a"));
  }
}
const _c0 = function (a0, a1, a2) {
  return {
    itemsPerPage: a0,
    currentPage: a1,
    totalItems: a2
  };
};
class ProjectsMatchedComponent {
  constructor(projectService, notificationService, router, localStorageService) {
    this.projectService = projectService;
    this.notificationService = notificationService;
    this.router = router;
    this.localStorageService = localStorageService;
    this.showLoader = false;
    this.projectList = [];
    this.page = src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__.pagination.page;
    this.pagesize = src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__.pagination.itemsPerPage;
    this.totalRecords = src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__.pagination.totalRecords;
    this.searchText = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('');
    this.loginUser = this.localStorageService.getLogger();
  }
  ngOnInit() {
    this.searchText.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(500)).subscribe(result => {
      console.log('result', result);
      this.getProjectList();
    });
    this.getProjectList();
  }
  getProjectList() {
    this.showLoader = true;
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.keyword = String(this.searchText?.value) || "";
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.page = String(this.page);
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.limit = String(this.pagesize);
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.applied = false;
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.sortlist = false;
    this.projectService.getProjectList(src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList).subscribe(response => {
      this.projectList = [];
      this.totalRecords = 0;
      if (response?.status == true) {
        this.showLoader = false;
        this.projectList = response?.data?.data;
      } else {
        this.notificationService.showError(response?.message);
        this.showLoader = false;
      }
    }, error => {
      this.notificationService.showError(error?.message);
      this.showLoader = false;
    });
  }
  sortListProject(projectId) {
    const payload = {
      userId: this.loginUser.id,
      projectId: projectId
    };
    this.projectService.projectSortList(payload).subscribe(response => {
      if (response?.status) {
        this.notificationService.showSuccess(response?.message);
        this.getProjectList();
      } else {
        return this.notificationService.showError(response?.message);
      }
    }, error => {
      return this.notificationService.showError(error?.message || 'Something went wrong !');
    });
  }
  projectDetails(projectId) {
    this.router.navigate(['/supplier-admin/projects-details'], {
      queryParams: {
        id: projectId
      }
    });
  }
  paginate(page) {
    this.page = page;
    this.getProjectList();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  static #_ = this.ɵfac = function ProjectsMatchedComponent_Factory(t) {
    return new (t || ProjectsMatchedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_project_service_project_service__WEBPACK_IMPORTED_MODULE_2__.ProjectService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ProjectsMatchedComponent,
    selectors: [["app-projects-matched"]],
    decls: 50,
    vars: 9,
    consts: [["id", "main"], [1, "container-fluid"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-lg-4", "col-xl-4", "col-12", "mob-mb1"], [1, "form-group", "mb-0"], [1, "input-icon"], [1, "bi", "bi-search"], ["type", "search", "placeholder", "Search", 1, "form-control", "control-search", 3, "formControl"], [1, "col-lg-8", "col-xl-8", "col-12", "text-end"], [1, "form-check", "form-check-inline"], ["type", "radio", "name", "inlineRadioOptions", "id", "inlineRadio1", "checked", "", "value", "option1", 1, "form-check-input"], ["for", "inlineRadio1", 1, "form-check-label"], ["type", "radio", "name", "inlineRadioOptions", "id", "inlineRadio2", "value", "option2", 1, "form-check-input"], ["for", "inlineRadio2", 1, "form-check-label"], [1, "table-responsive", "mt-5", "mb-3"], [1, "table", "table-striped", "align-middle"], ["width", "200px"], [4, "ngFor", "ngForOf"], [1, "row", "mt-3", "align-items-center"], [1, "row"], [1, "pagination"], [3, "pageChange"], ["v-align", "middle"], [1, "bi", "bi-check-circle-fill", "text-success"], ["title", "View Details", 1, "btn", "btn-sm", "btn-primary", "m-1", 3, "click"], ["title", "Shortlist", 1, "btn", "btn-sm", "btn-dark", "m-1", 3, "click"]],
    template: function ProjectsMatchedComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "main", 0)(1, "section")(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 8)(10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "100% Match");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Partial Match");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 14)(19, "table", 15)(20, "thead")(21, "tr")(22, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Project Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "BOS ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Publish Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Industry");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Project Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Due Date & Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, ProjectsMatchedComponent_tr_44_Template, 30, 15, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](45, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 18)(47, "div", 19)(48, "div", 20)(49, "pagination-controls", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function ProjectsMatchedComponent_Template_pagination_controls_pageChange_49_listener($event) {
          return ctx.paginate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](45, 2, ctx.projectList, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](5, _c0, ctx.pagesize, ctx.page, ctx.totalRecords)));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, ngx_pagination__WEBPACK_IMPORTED_MODULE_10__.PaginationControlsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_10__.PaginatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 642:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/supplier-admin/projects-shortlisted/projects-shortlisted.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsShortlistedComponent: () => (/* binding */ ProjectsShortlistedComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 655);
/* harmony import */ var src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utility/shared/constant/pagination.constant */ 7005);
/* harmony import */ var src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utility/shared/constant/payload.const */ 5557);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_project_service_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/project-service/project.service */ 1887);
/* harmony import */ var src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notification/notification.service */ 6610);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ 1060);











function ProjectsShortlistedComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " CS(3/3)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "td")(26, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProjectsShortlistedComponent_tr_35_Template_a_click_26_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.projectDetails(item_r1 == null ? null : item_r1._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "View Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.projectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.BOSID);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](8, 9, item_r1 == null ? null : item_r1.publishDate, "MM/dd/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.industry);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.projectType);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](21, 12, item_r1 == null ? null : item_r1.dueDate, "MM/dd/yyyy, h:mm a"));
  }
}
const _c0 = function (a0, a1, a2) {
  return {
    itemsPerPage: a0,
    currentPage: a1,
    totalItems: a2
  };
};
class ProjectsShortlistedComponent {
  constructor(projectService, notificationService, router) {
    this.projectService = projectService;
    this.notificationService = notificationService;
    this.router = router;
    this.showLoader = false;
    this.projectList = [];
    this.page = src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__.pagination.page;
    this.pagesize = src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__.pagination.itemsPerPage;
    this.totalRecords = src_app_utility_shared_constant_pagination_constant__WEBPACK_IMPORTED_MODULE_0__.pagination.totalRecords;
    this.searchText = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('');
  }
  ngOnInit() {
    this.searchText.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(500)).subscribe(result => {
      console.log('result', result);
      this.getProjectList();
    });
    this.getProjectList();
  }
  getProjectList() {
    this.showLoader = true;
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.keyword = String(this.searchText?.value) || "";
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.page = String(this.page);
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.limit = String(this.pagesize);
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.applied = false;
    src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList.sortlist = true;
    this.projectService.getProjectList(src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList).subscribe(response => {
      this.projectList = [];
      this.totalRecords = 0;
      if (response?.status == true) {
        this.showLoader = false;
        this.projectList = response?.data?.data;
      } else {
        this.notificationService.showError(response?.message);
        this.showLoader = false;
      }
    }, error => {
      this.notificationService.showError(error?.message);
      this.showLoader = false;
    });
  }
  projectDetails(projectId) {
    this.router.navigate(['/supplier-admin/projects-details'], {
      queryParams: {
        id: projectId
      }
    });
  }
  paginate(page) {
    this.page = page;
    this.getProjectList();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  static #_ = this.ɵfac = function ProjectsShortlistedComponent_Factory(t) {
    return new (t || ProjectsShortlistedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_project_service_project_service__WEBPACK_IMPORTED_MODULE_2__.ProjectService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ProjectsShortlistedComponent,
    selectors: [["app-projects-shortlisted"]],
    decls: 41,
    vars: 9,
    consts: [["id", "main"], [1, "container-fluid"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-lg-4", "col-xl-4", "col-12", "mob-mb1"], [1, "form-group", "mb-0"], [1, "input-icon"], [1, "bi", "bi-search"], ["type", "search", "placeholder", "Search", 1, "form-control", "control-search", 3, "formControl"], [1, "table-responsive", "mt-5", "mb-3"], [1, "table", "table-striped", "align-middle"], ["width", "200px"], [4, "ngFor", "ngForOf"], [1, "row", "mt-3", "align-items-center"], [1, "row"], [1, "pagination"], [3, "pageChange"], ["v-align", "middle"], [1, "bi", "bi-check-circle-fill", "text-success"], ["title", "View Details", 1, "btn", "btn-sm", "btn-primary", "m-1", 3, "click"], ["title", "Shortlist", 1, "btn", "btn-sm", "btn-secondary", "m-1"]],
    template: function ProjectsShortlistedComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "main", 0)(1, "section")(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8)(10, "table", 9)(11, "thead")(12, "tr")(13, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Project Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "BOS ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Publish Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Industry");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Project Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Due Date & Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, ProjectsShortlistedComponent_tr_35_Template, 30, 15, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](36, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 12)(38, "div", 13)(39, "div", 14)(40, "pagination-controls", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function ProjectsShortlistedComponent_Template_pagination_controls_pageChange_40_listener($event) {
          return ctx.paginate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](36, 2, ctx.projectList, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](5, _c0, ctx.pagesize, ctx.page, ctx.totalRecords)));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, ngx_pagination__WEBPACK_IMPORTED_MODULE_9__.PaginationControlsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_9__.PaginatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 2441:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/supplier-admin/question-details/question-details.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestionDetailsComponent: () => (/* binding */ QuestionDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class QuestionDetailsComponent {
  static #_ = this.ɵfac = function QuestionDetailsComponent_Factory(t) {
    return new (t || QuestionDetailsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: QuestionDetailsComponent,
    selectors: [["app-question-details"]],
    decls: 33,
    vars: 0,
    consts: [["id", "main"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-4", "col-xl-4", "col-md-4", "col-sm-4", "col-12"], [1, "card", "mb-2"], [1, "card-body"], [1, "mb-0"], [1, "col-lg-7", "col-xl-7", "col-md-8", "col-sm-8", "col-12"], [1, "card"]],
    template: function QuestionDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "section")(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Question Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4)(10, "div", 5)(11, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Question Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4)(14, "div", 5)(15, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Reference Doscument & Page number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4)(18, "div", 5)(19, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Weightage ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4)(22, "div", 5)(23, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Deadline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7)(26, "div", 8)(27, "div", 5)(28, "p")(29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Instructions from West Gate/ Spectrum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 4417:
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/supplier-admin/suppiler-admin-chat/suppiler-admin-chat.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuppilerAdminChatComponent: () => (/* binding */ SuppilerAdminChatComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class SuppilerAdminChatComponent {
  static #_ = this.ɵfac = function SuppilerAdminChatComponent_Factory(t) {
    return new (t || SuppilerAdminChatComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SuppilerAdminChatComponent,
    selectors: [["app-suppiler-admin-chat"]],
    decls: 123,
    vars: 0,
    consts: [["id", "main"], [1, "p-0"], [1, "container"], [1, "row"], [1, "col-lg-3", "col-xl-3", "col-md-12", "col-sm-12", "col-12"], ["id", "TeamList-sidebar"], ["href", "#", 1, "active"], ["href", "#"], [1, "col-lg-9", "col-xl-9", "col-md-12", "col-sm-12", "col-12"], ["id", "chatWindow"], [1, "chatHistory"], [1, "sent"], [1, "team-name"], [1, "recived-time"], [1, "read-tick"], [1, "bi", "bi-check2-all"], [1, "replies"], [1, "unread-tick"], [1, "chatsendBox"], [1, "row", "align-items-center"], [1, "col-lg-9", "col-xl-9", "col-12"], [1, "col-auto", "text-center"], ["type", "button", 1, "btn", "text-theme"], [1, "bi", "bi-mic-fill"], [1, "col-9", "p-0"], ["type", "text", "placeholder", "Enter your text here!", 1, "form-control", "border-0", "ps-0"], [1, "bi", "bi-send-fill", "p-22"], [1, "col-lg-3", "col-xl-3", "col-12"], [1, "floatingbuttons"], [1, "bi", "bi-paperclip"], [1, "bi", "bi-at"], [1, "bi", "bi-emoji-smile-fill"], [1, "bi", "bi-play-circle-fill"], ["href", "#", 1, "google-meet"], ["src", "assets/img/google-meet.svg"], [1, "Mobile-chatsendBox"], [1, "col-2", "text-center"], [1, "col-8", "p-0"]],
    template: function SuppilerAdminChatComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "ul")(7, "li")(8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Team A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li")(11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Team B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li")(14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Team C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li")(17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Team D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li")(20, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Team E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li")(23, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Team F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8)(26, "div", 9)(27, "div", 10)(28, "ul")(29, "li")(30, "div", 11)(31, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Team A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 13)(36, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "3:15PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li")(40, "div", 16)(41, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Team B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 13)(46, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Just Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li")(50, "div", 11)(51, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Team A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 13)(56, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "3:15PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li")(60, "div", 16)(61, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Team B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 13)(66, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Just Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 18)(70, "div", 19)(71, "div", 20)(72, "div", 19)(73, "div", 21)(74, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 21)(79, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 27)(82, "ul", 28)(83, "li")(84, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li")(87, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li")(90, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li")(93, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 35)(98, "div", 19)(99, "div", 20)(100, "div", 19)(101, "div", 36)(102, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 36)(107, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 27)(110, "ul", 28)(111, "li")(112, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li")(115, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li")(118, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li")(121, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 1339:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/supplier-admin/supplier-admin-project-listing/supplier-admin-project-listing.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupplierAdminProjectListingComponent: () => (/* binding */ SupplierAdminProjectListingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _projects_applied_projects_applied_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projects-applied/projects-applied.component */ 6741);
/* harmony import */ var _projects_shortlisted_projects_shortlisted_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../projects-shortlisted/projects-shortlisted.component */ 642);
/* harmony import */ var _projects_all_projects_all_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projects-all/projects-all.component */ 3486);
/* harmony import */ var _projects_matched_projects_matched_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projects-matched/projects-matched.component */ 4122);






function SupplierAdminProjectListingComponent_app_projects_matched_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-projects-matched");
  }
}
function SupplierAdminProjectListingComponent_app_projects_all_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-projects-all");
  }
}
function SupplierAdminProjectListingComponent_app_projects_shortlisted_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-projects-shortlisted");
  }
}
function SupplierAdminProjectListingComponent_app_projects_applied_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-projects-applied");
  }
}
const _c0 = function (a0) {
  return {
    "active": a0
  };
};
class SupplierAdminProjectListingComponent {
  constructor() {
    this.activeComponent = 2; // 1 : Matched Project , 2 : All Project, 3: Shortlisted, 4: Applied Projects
  }

  ngOnInit() {}
  changeComponent(componentNumber) {
    this.activeComponent = componentNumber;
  }
  static #_ = this.ɵfac = function SupplierAdminProjectListingComponent_Factory(t) {
    return new (t || SupplierAdminProjectListingComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SupplierAdminProjectListingComponent,
    selectors: [["app-supplier-admin-project-listing"]],
    decls: 21,
    vars: 16,
    consts: [[1, "pt-3", "pb-0", "ps-0", "pe-0"], [1, "container-fluids"], [1, "row", "align-items-center"], [1, "projects-nav-tab"], [3, "click"], [3, "ngClass"], [4, "ngIf"]],
    template: function SupplierAdminProjectListingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "nav")(4, "ul", 3)(5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SupplierAdminProjectListingComponent_Template_li_click_5_listener() {
          return ctx.changeComponent(1);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Matched");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SupplierAdminProjectListingComponent_Template_li_click_8_listener() {
          return ctx.changeComponent(2);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "All Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SupplierAdminProjectListingComponent_Template_li_click_11_listener() {
          return ctx.changeComponent(3);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Shortlisted");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SupplierAdminProjectListingComponent_Template_li_click_14_listener() {
          return ctx.changeComponent(4);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Applied Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, SupplierAdminProjectListingComponent_app_projects_matched_17_Template, 1, 0, "app-projects-matched", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, SupplierAdminProjectListingComponent_app_projects_all_18_Template, 1, 0, "app-projects-all", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, SupplierAdminProjectListingComponent_app_projects_shortlisted_19_Template, 1, 0, "app-projects-shortlisted", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, SupplierAdminProjectListingComponent_app_projects_applied_20_Template, 1, 0, "app-projects-applied", 6);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c0, ctx.activeComponent == 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c0, ctx.activeComponent == 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c0, ctx.activeComponent == 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c0, ctx.activeComponent == 4));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.activeComponent == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.activeComponent == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.activeComponent == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.activeComponent == 4);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _projects_applied_projects_applied_component__WEBPACK_IMPORTED_MODULE_0__.ProjectsAppliedComponent, _projects_shortlisted_projects_shortlisted_component__WEBPACK_IMPORTED_MODULE_1__.ProjectsShortlistedComponent, _projects_all_projects_all_component__WEBPACK_IMPORTED_MODULE_2__.ProjectsAllComponent, _projects_matched_projects_matched_component__WEBPACK_IMPORTED_MODULE_3__.ProjectsMatchedComponent],
    styles: [".projects-nav-tab[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zdXBwbGllci1hZG1pbi9zdXBwbGllci1hZG1pbi1wcm9qZWN0LWxpc3Rpbmcvc3VwcGxpZXItYWRtaW4tcHJvamVjdC1saXN0aW5nLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vV2h5UVRlY2glMjBQcm9qZWN0L3dlc3RnZXQvd2VzdGdhdGVfYW5ndWxhci9zcmMvYXBwL21vZHVsZXMvc3VwcGxpZXItYWRtaW4vc3VwcGxpZXItYWRtaW4tcHJvamVjdC1saXN0aW5nL3N1cHBsaWVyLWFkbWluLXByb2plY3QtbGlzdGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUNDRiIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0cy1uYXYtdGFiIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIiwiLnByb2plY3RzLW5hdi10YWIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 4280:
/*!********************************************************************!*\
  !*** ./src/app/modules/supplier-admin/supplier-admin.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupplierAdminComponent: () => (/* binding */ SupplierAdminComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_utility_shared_components_supplier_header_supplier_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utility/shared/components/supplier-header/supplier-header.component */ 5605);



class SupplierAdminComponent {
  static #_ = this.ɵfac = function SupplierAdminComponent_Factory(t) {
    return new (t || SupplierAdminComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SupplierAdminComponent,
    selectors: [["app-supplier-admin"]],
    decls: 2,
    vars: 0,
    template: function SupplierAdminComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-supplier-header")(1, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, src_app_utility_shared_components_supplier_header_supplier_header_component__WEBPACK_IMPORTED_MODULE_0__.SupplierHeaderComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 6377:
/*!*****************************************************************!*\
  !*** ./src/app/modules/supplier-admin/supplier-admin.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupplierAdminModule: () => (/* binding */ SupplierAdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _supplier_admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supplier-admin.component */ 4280);
/* harmony import */ var _total_projects_in_category_total_projects_in_category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./total-projects-in-category/total-projects-in-category.component */ 4823);
/* harmony import */ var _supplier_home_supplier_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./supplier-home/supplier-home.component */ 316);
/* harmony import */ var _projects_applied_projects_applied_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects-applied/projects-applied.component */ 6741);
/* harmony import */ var _projects_shortlisted_projects_shortlisted_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects-shortlisted/projects-shortlisted.component */ 642);
/* harmony import */ var _projects_all_projects_all_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects-all/projects-all.component */ 3486);
/* harmony import */ var _projects_matched_projects_matched_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects-matched/projects-matched.component */ 4122);
/* harmony import */ var _supplier_admin_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./supplier-admin.routing.module */ 7462);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-pagination */ 1060);
/* harmony import */ var src_app_utility_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/utility/shared/shared.module */ 7313);
/* harmony import */ var _question_details_question_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./question-details/question-details.component */ 2441);
/* harmony import */ var _projects_details_projects_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projects-details/projects-details.component */ 7903);
/* harmony import */ var _expired_project_expired_project_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./expired-project/expired-project.component */ 9375);
/* harmony import */ var _applied_projects_details_applied_projects_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./applied-projects-details/applied-projects-details.component */ 7958);
/* harmony import */ var src_app_utility_shared_components_supplier_header_supplier_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/utility/shared/components/supplier-header/supplier-header.component */ 5605);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./manage-user/manage-user.component */ 3335);
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-user/add-user.component */ 8727);
/* harmony import */ var _case_studies_case_studies_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./case-studies/case-studies.component */ 8426);
/* harmony import */ var _add_case_study_add_case_study_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add-case-study/add-case-study.component */ 9335);
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user-profile/user-profile.component */ 1221);
/* harmony import */ var _supplier_admin_project_listing_supplier_admin_project_listing_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./supplier-admin-project-listing/supplier-admin-project-listing.component */ 1339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 1699);

























class SupplierAdminModule {
  static #_ = this.ɵfac = function SupplierAdminModule_Factory(t) {
    return new (t || SupplierAdminModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({
    type: SupplierAdminModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule, _supplier_admin_routing_module__WEBPACK_IMPORTED_MODULE_7__.SupplierRoutingModule, src_app_utility_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_22__.NgxPaginationModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](SupplierAdminModule, {
    declarations: [_supplier_admin_component__WEBPACK_IMPORTED_MODULE_0__.SupplierAdminComponent, _total_projects_in_category_total_projects_in_category_component__WEBPACK_IMPORTED_MODULE_1__.TotalProjectsInCategoryComponent, _supplier_home_supplier_home_component__WEBPACK_IMPORTED_MODULE_2__.SupplierHomeComponent, _projects_applied_projects_applied_component__WEBPACK_IMPORTED_MODULE_3__.ProjectsAppliedComponent, _projects_shortlisted_projects_shortlisted_component__WEBPACK_IMPORTED_MODULE_4__.ProjectsShortlistedComponent, _projects_all_projects_all_component__WEBPACK_IMPORTED_MODULE_5__.ProjectsAllComponent, _projects_matched_projects_matched_component__WEBPACK_IMPORTED_MODULE_6__.ProjectsMatchedComponent, _question_details_question_details_component__WEBPACK_IMPORTED_MODULE_9__.QuestionDetailsComponent, _projects_details_projects_details_component__WEBPACK_IMPORTED_MODULE_10__.ProjectsDetailsComponent, _expired_project_expired_project_component__WEBPACK_IMPORTED_MODULE_11__.ExpiredProjectComponent, _applied_projects_details_applied_projects_details_component__WEBPACK_IMPORTED_MODULE_12__.AppliedProjectsDetailsComponent, src_app_utility_shared_components_supplier_header_supplier_header_component__WEBPACK_IMPORTED_MODULE_13__.SupplierHeaderComponent, _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_15__.AddUserComponent, _manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_14__.ManageUserComponent, _case_studies_case_studies_component__WEBPACK_IMPORTED_MODULE_16__.CaseStudiesComponent, _add_case_study_add_case_study_component__WEBPACK_IMPORTED_MODULE_17__.AddCaseStudyComponent, _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_18__.UserProfileComponent, _supplier_admin_project_listing_supplier_admin_project_listing_component__WEBPACK_IMPORTED_MODULE_19__.SupplierAdminProjectListingComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule, _supplier_admin_routing_module__WEBPACK_IMPORTED_MODULE_7__.SupplierRoutingModule, src_app_utility_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_22__.NgxPaginationModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbModule]
  });
})();

/***/ }),

/***/ 7462:
/*!*************************************************************************!*\
  !*** ./src/app/modules/supplier-admin/supplier-admin.routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupplierRoutingModule: () => (/* binding */ SupplierRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _supplier_admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supplier-admin.component */ 4280);
/* harmony import */ var _supplier_dashboard_supplier_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supplier-dashboard/supplier-dashboard.component */ 4742);
/* harmony import */ var _supplier_home_supplier_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./supplier-home/supplier-home.component */ 316);
/* harmony import */ var _total_projects_in_category_total_projects_in_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./total-projects-in-category/total-projects-in-category.component */ 4823);
/* harmony import */ var _question_details_question_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./question-details/question-details.component */ 2441);
/* harmony import */ var _projects_details_projects_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects-details/projects-details.component */ 7903);
/* harmony import */ var _expired_project_expired_project_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./expired-project/expired-project.component */ 9375);
/* harmony import */ var _applied_projects_details_applied_projects_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./applied-projects-details/applied-projects-details.component */ 7958);
/* harmony import */ var _manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./manage-user/manage-user.component */ 3335);
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-user/add-user.component */ 8727);
/* harmony import */ var _case_studies_case_studies_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./case-studies/case-studies.component */ 8426);
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-profile/user-profile.component */ 1221);
/* harmony import */ var _supplier_admin_project_listing_supplier_admin_project_listing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./supplier-admin-project-listing/supplier-admin-project-listing.component */ 1339);
/* harmony import */ var _suppiler_admin_chat_suppiler_admin_chat_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./suppiler-admin-chat/suppiler-admin-chat.component */ 4417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 1699);

















const routes = [{
  path: '',
  component: _supplier_admin_component__WEBPACK_IMPORTED_MODULE_0__.SupplierAdminComponent,
  children: [
  // {
  //   path: "projects-all",
  //   component: ProjectsAllComponent
  // },
  // {
  //   path: "projects-shortlisted",
  //   component: ProjectsShortlistedComponent
  // },
  // {
  //   path: "projects-applied",
  //   component: ProjectsAppliedComponent
  // },
  // {
  //   path: "projects-matched",
  //   component: ProjectsMatchedComponent
  // },
  {
    path: "project-list",
    component: _supplier_admin_project_listing_supplier_admin_project_listing_component__WEBPACK_IMPORTED_MODULE_12__.SupplierAdminProjectListingComponent
  }, {
    path: "supplier-dashboard",
    component: _supplier_dashboard_supplier_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.SupplierDashboardComponent
  }, {
    path: "supplier-home",
    component: _supplier_home_supplier_home_component__WEBPACK_IMPORTED_MODULE_2__.SupplierHomeComponent
  }, {
    path: "total-projects-in-category",
    component: _total_projects_in_category_total_projects_in_category_component__WEBPACK_IMPORTED_MODULE_3__.TotalProjectsInCategoryComponent
  }, {
    path: "applied-project-details",
    component: _applied_projects_details_applied_projects_details_component__WEBPACK_IMPORTED_MODULE_7__.AppliedProjectsDetailsComponent
  }, {
    path: "expired-project",
    component: _expired_project_expired_project_component__WEBPACK_IMPORTED_MODULE_6__.ExpiredProjectComponent
  }, {
    path: "projects-details",
    component: _projects_details_projects_details_component__WEBPACK_IMPORTED_MODULE_5__.ProjectsDetailsComponent
  }, {
    path: "question-details",
    component: _question_details_question_details_component__WEBPACK_IMPORTED_MODULE_4__.QuestionDetailsComponent
  }, {
    path: "manage-user",
    component: _manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_8__.ManageUserComponent
  }, {
    path: "add-user",
    component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_9__.AddUserComponent
  }, {
    path: "case-studies-list",
    component: _case_studies_case_studies_component__WEBPACK_IMPORTED_MODULE_10__.CaseStudiesComponent
  }, {
    path: "user-profile",
    component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_11__.UserProfileComponent
  }, {
    path: "chat",
    component: _suppiler_admin_chat_suppiler_admin_chat_component__WEBPACK_IMPORTED_MODULE_13__.SuppilerAdminChatComponent
  }]
}, {
  path: "**",
  pathMatch: "full",
  redirectTo: ""
}];
class SupplierRoutingModule {
  static #_ = this.ɵfac = function SupplierRoutingModule_Factory(t) {
    return new (t || SupplierRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
    type: SupplierRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](SupplierRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
  });
})();

/***/ }),

/***/ 4742:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/supplier-admin/supplier-dashboard/supplier-dashboard.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupplierDashboardComponent: () => (/* binding */ SupplierDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_supplier_admin_supplier_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/supplier-admin/supplier-admin.service */ 5938);
/* harmony import */ var src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/notification/notification.service */ 6610);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);




class SupplierDashboardComponent {
  constructor(supplierService, notificationService, router, route) {
    this.supplierService = supplierService;
    this.notificationService = notificationService;
    this.router = router;
    this.route = route;
    this.supplierdashboardlist = [];
    this.showLoader = false;
  }
  ngOnInit() {
    this.getProjectDetails();
  }
  getProjectDetails() {
    this.showLoader = true;
    this.supplierService.getDashboardList().subscribe(response => {
      if (response?.status == true) {
        this.showLoader = false;
        this.supplierdashboardlist = response?.data;
      } else {
        this.notificationService.showError(response?.message);
        this.showLoader = false;
      }
    }, error => {
      this.notificationService.showError(error?.message);
      this.showLoader = false;
    });
  }
  static #_ = this.ɵfac = function SupplierDashboardComponent_Factory(t) {
    return new (t || SupplierDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_supplier_admin_supplier_admin_service__WEBPACK_IMPORTED_MODULE_0__.SupplierAdminService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SupplierDashboardComponent,
    selectors: [["app-supplier-dashboard"]],
    decls: 88,
    vars: 6,
    consts: [["id", "main"], [1, "dashboard-section"], [1, "container"], [1, "row"], [1, "col-lg-6", "col-xl-6", "col-sm-6", "col-md-6", "col-12", "mb-5"], [1, "statistic-card"], [1, "card-body"], [1, "row", "align-items-center"], [1, "col-8"], [1, "col-4"], [1, "text-blue"], ["href", "/supplier-admin/total-projects-in-category", 1, "explore-btn", "bg-blue", "w-100"], [1, "text-green"], ["href", "/supplier-admin/projects-applied", 1, "explore-btn", "bg-green", "w-100"], [1, "text-teal"], ["href", "/supplier-admin/projects-matched", 1, "explore-btn", "bg-teal", "w-100"], [1, "text-brown"], ["href", "/supplier-admin/projects-applied", 1, "explore-btn", "bg-brown", "w-100"], [1, "text-light-purple"], ["href", "/supplier-admin/projects-applied", 1, "explore-btn", "bg-light-purple", "w-100"], [1, "text-dark-gray"], ["href", "/supplier-admin/projects-applied", 1, "explore-btn", "bg-dark-gray", "w-100"]],
    template: function SupplierDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "p")(10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Total Projects in my category");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9)(13, "h2", 10)(14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 4)(19, "div", 5)(20, "div", 6)(21, "div", 7)(22, "div", 8)(23, "p")(24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Awarded");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 9)(27, "h2", 12)(28, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 4)(33, "div", 5)(34, "div", 6)(35, "div", 7)(36, "div", 8)(37, "p")(38, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Total matched");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 9)(41, "h2", 14)(42, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 4)(47, "div", 5)(48, "div", 6)(49, "div", 7)(50, "div", 8)(51, "p")(52, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Not Awarded");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 9)(55, "h2", 16)(56, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 4)(61, "div", 5)(62, "div", 6)(63, "div", 7)(64, "div", 8)(65, "p")(66, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Total Submitted");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 9)(69, "h2", 18)(70, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 4)(75, "div", 5)(76, "div", 6)(77, "div", 7)(78, "div", 8)(79, "p")(80, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Expired History");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 9)(83, "h2", 20)(84, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.supplierdashboardlist == null ? null : ctx.supplierdashboardlist.totalProjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.supplierdashboardlist == null ? null : ctx.supplierdashboardlist.totalAwarded);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.supplierdashboardlist == null ? null : ctx.supplierdashboardlist.matchedProjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.supplierdashboardlist == null ? null : ctx.supplierdashboardlist.totalNotAwarded);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.supplierdashboardlist == null ? null : ctx.supplierdashboardlist.totalSubmit);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.supplierdashboardlist == null ? null : ctx.supplierdashboardlist.totalNotAwarded);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 316:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/supplier-admin/supplier-home/supplier-home.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupplierHomeComponent: () => (/* binding */ SupplierHomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class SupplierHomeComponent {
  static #_ = this.ɵfac = function SupplierHomeComponent_Factory(t) {
    return new (t || SupplierHomeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SupplierHomeComponent,
    selectors: [["app-supplier-home"]],
    decls: 19,
    vars: 0,
    consts: [["id", "main"], [1, "p-0"], [1, "container"], [1, "row", "align-items-center"], [1, "col-xl-6", "col-lg-6", "col-12", "desktop-pt200"], [1, "Heading-h1"], [1, "Heading-h2", "mb-5"], ["routerLink", "/supplier-admin/project-list", 1, "btn", "btn-small"], [1, "col-lg-6", "col-xl-6", "col-12"], [1, "bosTeam-wrapper"], ["src", "assets/img/welcome-page-team.png"]],
    template: function SupplierHomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5)(6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Welcome back!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 6)(9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " with your perfect project and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "start growing!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "View Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8)(17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 4823:
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/supplier-admin/total-projects-in-category/total-projects-in-category.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TotalProjectsInCategoryComponent: () => (/* binding */ TotalProjectsInCategoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class TotalProjectsInCategoryComponent {
  static #_ = this.ɵfac = function TotalProjectsInCategoryComponent_Factory(t) {
    return new (t || TotalProjectsInCategoryComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TotalProjectsInCategoryComponent,
    selectors: [["app-total-projects-in-category"]],
    decls: 192,
    vars: 0,
    consts: [["id", "main"], [1, "container"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-lg-4", "col-xl-4", "col-12", "mob-mb1"], [1, "form-group", "mb-0"], [1, "input-icon"], [1, "bi", "bi-search"], ["type", "search", "placeholder", "Search", 1, "form-control", "control-search"], [1, "table-responsive", "mt-5", "mb-3"], [1, "table", "table-striped", "align-middle"], ["width", "200px"], ["href", "javascript:;"], ["v-align", "middle"], [1, "bi", "bi-check-circle-fill", "text-success"], ["href", "", "title", "View Details", 1, "btn", "btn-sm", "btn-primarysm"], ["href", "javascript:;", "title", "Shortlist", 1, "btn", "btn-sm", "btn-dark"], [1, "pagination", "justify-content-end"], [1, "page-item", "disabled"], [1, "page-link"], [1, "page-item"], ["href", "javascript:;", 1, "page-link"], ["aria-current", "page", 1, "page-item", "active"]],
    template: function TotalProjectsInCategoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "section")(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8)(10, "table", 9)(11, "thead")(12, "tr")(13, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Project Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "BOS ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Publish Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Industry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Project Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Due Date & Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tbody")(35, "tr")(36, "td")(37, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Provision of MyBedsLife Student Engagement App Support Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "546552");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "2023-05-31");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "School");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u00A350000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "In-Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "25-11-2014 & 5:00PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " CS(3/3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td")(59, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Shortlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tr")(64, "td")(65, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Provision of MyBedsLife Student Engagement App Support Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "546552");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "2023-05-31");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "School");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\u00A350000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "In-Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "25-11-2014 & 5:00PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " CS(3/3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td")(87, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Shortlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "tr")(92, "td")(93, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Provision of MyBedsLife Student Engagement App Support Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "546552");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "2023-05-31");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "School");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\u00A350000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "In-Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "25-11-2014 & 5:00PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " CS(3/3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "td")(115, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Shortlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "tr")(120, "td")(121, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Provision of MyBedsLife Student Engagement App Support Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "546552");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "2023-05-31");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "School");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "\u00A350000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "In-Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "25-11-2014 & 5:00PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " CS(3/3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "td")(143, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Shortlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "tr")(148, "td")(149, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Provision of MyBedsLife Student Engagement App Support Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "546552");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "2023-05-31");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "School");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "\u00A350000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "In-Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "25-11-2014 & 5:00PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " CS(3/3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "td")(171, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Shortlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "nav")(176, "ul", 16)(177, "li", 17)(178, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "li", 19)(181, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "li", 21)(184, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "li", 19)(187, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "li", 19)(190, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 1221:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/supplier-admin/user-profile/user-profile.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserProfileComponent: () => (/* binding */ UserProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);


class UserProfileComponent {
  static #_ = this.ɵfac = function UserProfileComponent_Factory(t) {
    return new (t || UserProfileComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: UserProfileComponent,
    selectors: [["app-user-profile"]],
    decls: 60,
    vars: 0,
    consts: [["id", "main"], [1, "user-profile-section"], [1, "container"], [1, "row", "align-items-center", "mb-5"], [1, "col-lg-10", "col-xl-10", "col-md-10", "col-sm-10", "col-8", "mob-mb1"], [1, "text-theme", "mb-4"], [1, "col-lg-2", "col-xl-2", "col-md-4", "col-sm-4", "col-12", "text-end"], ["href", "manage-users.html", 1, "btn", "btn", "btn-link", "text-dark"], [1, "row"], [1, "col-lg-2", "col-xl-2", "col-12"], [1, "profile-avtar", "mt-4", "mb-4"], ["src", "assets/img/face1.jpg"], [1, "input--file"], [1, "bi", "bi-camera-fill"], ["name", "Select File", "type", "file"], [1, "col-lg-5", "col-xl-5", "col-12"], [1, "form-group"], [1, "form-select"], ["type", "text", 1, "form-control"], [1, "upload-btn-wrapper"], [1, "btn-upload-file"], [1, "bi", "bi-file-earmark-arrow-up-fill"], ["type", "file", "name", "myfile"], ["href", "javascript:;", 1, "btn", "btn-dark", 2, "padding", "12px 30px"], ["type", "submit", 1, "btn", "btn-primary"]],
    template: function UserProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5)(6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Users Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 13)(17, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15)(19, "form")(20, "div", 16)(21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "My Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "select", 17)(24, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Category name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16)(27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "User ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16)(31, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16)(35, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Copany Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16)(39, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Designation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16)(43, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Date of Joining");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16)(47, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "LinkeIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 16)(51, "div", 19)(52, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Upload Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 603:
/*!*******************************************************!*\
  !*** ./src/app/services/auth-service/auth.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthEndPoint: () => (/* binding */ AuthEndPoint),
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var src_environment_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environment/environment */ 9947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../local-storage/local-storage.service */ 1021);






var AuthEndPoint;
(function (AuthEndPoint) {
  AuthEndPoint["LOGIN_USER"] = "/user/login";
  AuthEndPoint["CHANGE_PASSWORD"] = "/user/change-password/";
  AuthEndPoint["FORGOT_PASSWORD"] = "/user/forgot";
})(AuthEndPoint || (AuthEndPoint = {}));
class AuthService {
  constructor(httpClient, router, localStorageService) {
    this.httpClient = httpClient;
    this.router = router;
    this.localStorageService = localStorageService;
    this.baseUrl = src_environment_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
  }
  getHeader() {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      'Content-Type': 'application/json'
    });
    return headers;
  }
  loginUser(payload) {
    return this.httpClient.post(this.baseUrl + AuthEndPoint.LOGIN_USER, payload, {
      headers: this.getHeader()
    });
  }
  logout() {
    this.localStorageService.clearStorage();
    this.router.navigateByUrl('/');
  }
  forgotPassword(payload) {
    return this.httpClient.post(this.baseUrl + AuthEndPoint.FORGOT_PASSWORD, payload);
  }
  changePassword(payload) {
    return this.httpClient.post(this.baseUrl + AuthEndPoint.CHANGE_PASSWORD, payload);
  }
  static #_ = this.ɵfac = function AuthService_Factory(t) {
    return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: AuthService,
    factory: AuthService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 570:
/*!*****************************************************!*\
  !*** ./src/app/services/foi-service/foi.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FOIEndPoint: () => (/* binding */ FOIEndPoint),
/* harmony export */   FoiService: () => (/* binding */ FoiService)
/* harmony export */ });
/* harmony import */ var src_environment_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environment/environment */ 9947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../local-storage/local-storage.service */ 1021);





var FOIEndPoint;
(function (FOIEndPoint) {
  FOIEndPoint["FOI_LIST"] = "/foi/list";
  FOIEndPoint["ADD_FOI"] = "/foi/create";
  FOIEndPoint["FOI_EDIT"] = "/foi/update";
  FOIEndPoint["DELETE_FOI"] = "/foi/delete";
  // PROJECT_DETAILS = '/project/get/'
})(FOIEndPoint || (FOIEndPoint = {}));
class FoiService {
  constructor(httpClient, router, localStorageService) {
    this.httpClient = httpClient;
    this.router = router;
    this.localStorageService = localStorageService;
    this.baseUrl = src_environment_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
  }
  getFOIList() {
    return this.httpClient.get(this.baseUrl + FOIEndPoint.FOI_LIST);
  }
  deleteFOI(payload) {
    return this.httpClient.delete(this.baseUrl + FOIEndPoint.DELETE_FOI, payload);
  }
  editFOI(payload) {
    return this.httpClient.patch(this.baseUrl + FOIEndPoint.FOI_EDIT, payload);
  }
  addFOI(payload) {
    return this.httpClient.post(this.baseUrl + FOIEndPoint.ADD_FOI, payload);
  }
  static #_ = this.ɵfac = function FoiService_Factory(t) {
    return new (t || FoiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: FoiService,
    factory: FoiService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 1021:
/*!*****************************************************************!*\
  !*** ./src/app/services/local-storage/local-storage.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalStorageService: () => (/* binding */ LocalStorageService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class LocalStorageService {
  constructor() {
    this.imageChangeEvent = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
  }
  // Function to use for the set login user details in localStorage
  setLogger(details) {
    const loginData = JSON.stringify(details);
    localStorage.setItem('loginUser', loginData);
  }
  setLoginToken(details) {
    localStorage.setItem('loginToken', details?.token);
  }
  // Set the updated loginUser details
  updateUserDetails(details) {
    const loginData = JSON.stringify(details);
    localStorage.setItem('loginUser', loginData);
  }
  // Function to use for the get login user details from the localStorage
  getLogger() {
    const loginUser = localStorage.getItem('loginUser');
    if (loginUser) {
      return JSON.parse(loginUser);
    } else {
      return "";
    }
  }
  // Function to use for the get login user token from the localStorage
  getLoggerToken() {
    const loginToken = localStorage.getItem('loginToken');
    return loginToken;
  }
  // Function to use for the clear localStorage
  clearStorage() {
    localStorage.clear();
  }
  emitImageChangeEvent(imageData) {
    this.imageChangeEvent.next(imageData);
  }
  getImageData() {
    return this.imageChangeEvent;
  }
  static #_ = this.ɵfac = function LocalStorageService_Factory(t) {
    return new (t || LocalStorageService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: LocalStorageService,
    factory: LocalStorageService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 325:
/*!***************************************************************************!*\
  !*** ./src/app/services/mailscreenshot-service/mailscreenshot.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MailScreenshotEndPoint: () => (/* binding */ MailScreenshotEndPoint),
/* harmony export */   MailscreenshotService: () => (/* binding */ MailscreenshotService)
/* harmony export */ });
/* harmony import */ var src_environment_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environment/environment */ 9947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../local-storage/local-storage.service */ 1021);





var MailScreenshotEndPoint;
(function (MailScreenshotEndPoint) {
  MailScreenshotEndPoint["MAIL_SCREENSHOT_LIST"] = "/mail-screenshot/list";
  MailScreenshotEndPoint["ADD_MAIL_SCREENSHOT"] = "/mail-screenshot/create";
  MailScreenshotEndPoint["MAIL_SCREENSHOT_EDIT"] = "/mail-screenshot/update";
  MailScreenshotEndPoint["DELETE_MAIL_SCREENSHOT"] = "/mail-screenshot/delete";
  // PROJECT_DETAILS = '/project/get/'
})(MailScreenshotEndPoint || (MailScreenshotEndPoint = {}));
class MailscreenshotService {
  constructor(httpClient, router, localStorageService) {
    this.httpClient = httpClient;
    this.router = router;
    this.localStorageService = localStorageService;
    this.baseUrl = src_environment_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
  }
  getMailSSList(payload) {
    return this.httpClient.get(this.baseUrl + MailScreenshotEndPoint.MAIL_SCREENSHOT_LIST, payload);
  }
  deleteMailSS(payload) {
    return this.httpClient.delete(this.baseUrl + MailScreenshotEndPoint.DELETE_MAIL_SCREENSHOT, payload);
  }
  editMailSS(payload) {
    return this.httpClient.patch(this.baseUrl + MailScreenshotEndPoint.MAIL_SCREENSHOT_EDIT, payload);
  }
  addMailSS(payload) {
    return this.httpClient.post(this.baseUrl + MailScreenshotEndPoint.ADD_MAIL_SCREENSHOT, payload);
  }
  static #_ = this.ɵfac = function MailscreenshotService_Factory(t) {
    return new (t || MailscreenshotService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: MailscreenshotService,
    factory: MailscreenshotService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 6610:
/*!***************************************************************!*\
  !*** ./src/app/services/notification/notification.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationService: () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ 7548);


class NotificationService {
  constructor(toasts) {
    this.toasts = toasts;
  }
  showSuccess(message, title) {
    this.toasts.success(message || '', title || 'Success');
  }
  showError(message, title) {
    this.toasts.error(message || 'Something Went Wrong!', title || 'Error');
  }
  showInfo(message, title) {
    this.toasts.info(message || '', title || 'Info');
  }
  showWarning(message, title) {
    this.toasts.warning(message || '', title || 'Warning');
  }
  static #_ = this.ɵfac = function NotificationService_Factory(t) {
    return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: NotificationService,
    factory: NotificationService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 1887:
/*!*************************************************************!*\
  !*** ./src/app/services/project-service/project.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectEndPoint: () => (/* binding */ ProjectEndPoint),
/* harmony export */   ProjectService: () => (/* binding */ ProjectService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var src_environment_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environment/environment */ 9947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




var ProjectEndPoint;
(function (ProjectEndPoint) {
  ProjectEndPoint["PROJECT_LIST"] = "/project/list";
  ProjectEndPoint["ADD_PROJECT"] = "/project/create";
  ProjectEndPoint["PROJECT_EDIT"] = "/project/update";
  ProjectEndPoint["DELETE_PROJECT"] = "/project/delete";
  ProjectEndPoint["PROJECT_DETAILS"] = "/project/get/";
  ProjectEndPoint["APPLY_PROJECT"] = "/project/apply";
  ProjectEndPoint["SORT_LIST_PROJECT"] = "/project/sortlist";
})(ProjectEndPoint || (ProjectEndPoint = {}));
class ProjectService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.baseUrl = src_environment_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
    this.projectid = localStorage.getItem('projectID');
  }
  // getProjectList(payload: any): Observable<any> {
  //   return this.httpClient
  //     .get<any>(this.baseUrl + ProjectEndPoint.PROJECT_LIST, payload);
  // }
  getProjectList(params) {
    const url = `${this.baseUrl}${ProjectEndPoint.PROJECT_LIST}`;
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
    queryParams = queryParams.set('keyword', params.keyword || '');
    queryParams = queryParams.set('page', params.page);
    queryParams = queryParams.set('limit', params.limit);
    if (params.applied) {
      queryParams = queryParams.set('applied', params.applied);
    }
    if (params.sortlist) {
      queryParams = queryParams.set('sortlist', params.sortlist);
    }
    return this.httpClient.get(url, {
      params: queryParams
    });
  }
  deleteProject(payload) {
    return this.httpClient.delete(this.baseUrl + ProjectEndPoint.DELETE_PROJECT, payload);
  }
  editProject(projectId, payload) {
    return this.httpClient.patch(this.baseUrl + ProjectEndPoint.PROJECT_EDIT + `/${projectId}`, payload);
  }
  addProject(payload) {
    return this.httpClient.post(this.baseUrl + ProjectEndPoint.ADD_PROJECT, payload);
  }
  getProjectDetails() {
    return this.httpClient.get(this.baseUrl + ProjectEndPoint.PROJECT_DETAILS + this.projectid);
  }
  // Darshan
  getProjectDetailsById(projectId) {
    return this.httpClient.get(this.baseUrl + ProjectEndPoint.PROJECT_DETAILS + projectId);
  }
  projectApply(payload) {
    return this.httpClient.patch(this.baseUrl + ProjectEndPoint.APPLY_PROJECT, payload);
  }
  projectSortList(payload) {
    return this.httpClient.patch(this.baseUrl + ProjectEndPoint.SORT_LIST_PROJECT, payload);
  }
  static #_ = this.ɵfac = function ProjectService_Factory(t) {
    return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ProjectService,
    factory: ProjectService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 5938:
/*!*******************************************************************!*\
  !*** ./src/app/services/supplier-admin/supplier-admin.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupplierAdminEndPoint: () => (/* binding */ SupplierAdminEndPoint),
/* harmony export */   SupplierAdminService: () => (/* binding */ SupplierAdminService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var src_environment_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environment/environment */ 9947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../local-storage/local-storage.service */ 1021);






var SupplierAdminEndPoint;
(function (SupplierAdminEndPoint) {
  SupplierAdminEndPoint["DASHBOARD_LIST"] = "/project/dashboard";
  SupplierAdminEndPoint["ADD_CASESTUDY"] = "/case-study/create";
  // PROJECT_DETAILS = '/project/get/',
  SupplierAdminEndPoint["MANAGE_USER_LIST"] = "/user/suplier";
  SupplierAdminEndPoint["ADD_USER"] = "/user/suplier/register";
  SupplierAdminEndPoint["CASE_STUDY_LIST"] = "/case-study/list";
  SupplierAdminEndPoint["ADD_CASE_STUDY"] = "/case-study/create";
  SupplierAdminEndPoint["DELETE_USER"] = "/user/delete/";
})(SupplierAdminEndPoint || (SupplierAdminEndPoint = {}));
class SupplierAdminService {
  constructor(httpClient, router, localStorageService) {
    this.httpClient = httpClient;
    this.router = router;
    this.localStorageService = localStorageService;
    this.baseUrl = src_environment_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
  }
  getDashboardList() {
    return this.httpClient.get(this.baseUrl + SupplierAdminEndPoint.DASHBOARD_LIST);
  }
  getCaseStudyList() {
    return this.httpClient.get(this.baseUrl + SupplierAdminEndPoint.CASE_STUDY_LIST);
  }
  getManageUserList() {
    return this.httpClient.get(this.baseUrl + SupplierAdminEndPoint.MANAGE_USER_LIST);
  }
  addCaseStudy(payload) {
    return this.httpClient.post(this.baseUrl + SupplierAdminEndPoint.ADD_CASESTUDY, payload);
  }
  addUser(payload) {
    return this.httpClient.post(this.baseUrl + SupplierAdminEndPoint.ADD_USER, payload);
  }
  // deleteUser(params: { id: string }): Observable<any> {
  //   return this.httpClient
  //     .post<any>(this.baseUrl + SupplierAdminEndPoint.DELETE_USER, payload);
  // }
  deleteUser(params) {
    const url = `${this.baseUrl}${SupplierAdminEndPoint.DELETE_USER}`;
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    queryParams = queryParams.set('id', params.id || '');
    return this.httpClient.delete(url, {
      params: queryParams
    });
  }
  static #_ = this.ɵfac = function SupplierAdminService_Factory(t) {
    return new (t || SupplierAdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: SupplierAdminService,
    factory: SupplierAdminService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 6306:
/*!*******************************************************!*\
  !*** ./src/app/utility/interceptor/ApiInterceptor.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APIInterceptor: () => (/* binding */ APIInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/local-storage/local-storage.service */ 1021);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);




class APIInterceptor {
  constructor(localStorageService, router) {
    this.localStorageService = localStorageService;
    this.router = router;
  }
  intercept(httpRequest, next) {
    const jwt = this.localStorageService.getLoggerToken();
    const authReq = httpRequest.clone({
      setHeaders: {
        authorization: `Bearer ${jwt}`
      }
    });
    return next.handle(authReq).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      if (error.status === 401) {
        // Redirect to login page
        this.localStorageService.clearStorage();
        this.router.navigate(['/login']);
      }
      // Pass the error to the caller of the interceptor
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
    }));
  }
  static #_ = this.ɵfac = function APIInterceptor_Factory(t) {
    return new (t || APIInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: APIInterceptor,
    factory: APIInterceptor.ɵfac
  });
}


/***/ }),

/***/ 8535:
/*!*****************************************************!*\
  !*** ./src/app/utility/shared/common/base-login.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseLogin: () => (/* binding */ BaseLogin)
/* harmony export */ });
class BaseLogin {
  constructor() {
    this.password = 'password';
    this.currentPassword = 'password';
    this.confirmPassword = 'password';
    this.showPassword = false;
    this.showConfPassword = false;
    this.showCurrentPassword = false;
  }
  showHidePass() {
    if (this.password === 'password') {
      this.password = 'text';
      this.showPassword = true;
    } else {
      this.password = 'password';
      this.showPassword = false;
    }
  }
  showHideConfirmPass() {
    if (this.confirmPassword === 'password') {
      this.confirmPassword = 'text';
      this.showConfPassword = true;
    } else {
      this.confirmPassword = 'password';
      this.showConfPassword = false;
    }
  }
  showHideCurrentPass() {
    if (this.currentPassword === 'password') {
      this.currentPassword = 'text';
      this.showCurrentPassword = true;
    } else {
      this.currentPassword = 'password';
      this.showCurrentPassword = false;
    }
  }
}

/***/ }),

/***/ 4390:
/*!**********************************************************************************************!*\
  !*** ./src/app/utility/shared/components/feasibility-header/feasibility-header.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeasibilityHeaderComponent: () => (/* binding */ FeasibilityHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth-service/auth.service */ 603);
/* harmony import */ var src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/local-storage/local-storage.service */ 1021);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/notification/notification.service */ 6610);





class FeasibilityHeaderComponent {
  constructor(authService, localStorageService, router, notificationService) {
    this.authService = authService;
    this.localStorageService = localStorageService;
    this.router = router;
    this.notificationService = notificationService;
    this.loginUser = this.localStorageService.getLogger();
  }
  logout() {
    this.authService.logout();
  }
  static #_ = this.ɵfac = function FeasibilityHeaderComponent_Factory(t) {
    return new (t || FeasibilityHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: FeasibilityHeaderComponent,
    selectors: [["app-feasibility-header"]],
    decls: 25,
    vars: 0,
    consts: [["id", "header"], [1, "container", "d-flex", "align-items-center"], ["routerLink", "/feasibility-user/feasibility-project-list", 1, "logo", "me-auto"], ["src", "assets/img/wgih-logo.svg", "alt", "", 1, "img-fluid"], ["id", "navbar", 1, "navbar"], ["routerLink", "/feasibility-user/feasibility-project-list", 1, "nav-link", "active"], [1, "bi", "bi-circle-fill", "p-6", "text-danger", "me-2"], [1, "dropdown"], ["href", "javascript:;"], [1, "login-avtar"], ["src", "assets/img/face1.jpg"], [1, "bi", "bi-chevron-down"], [2, "cursor", "pointer", 3, "click"], [1, "bi", "bi-list", "mobile-nav-toggle"]],
    template: function FeasibilityHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nav", 4)(5, "ul")(6, "li")(7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " My Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li", 7)(11, "a", 8)(12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Feasibility Analyst");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ul")(18, "li")(19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Profile Seting");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "li")(22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FeasibilityHeaderComponent_Template_a_click_22_listener() {
          return ctx.logout();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 7427:
/*!****************************************************************************************!*\
  !*** ./src/app/utility/shared/components/forgot-password/forgot-password.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPasswordComponent: () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _common_base_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/base-login */ 8535);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _constant_validation_patterns_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constant/validation-patterns.const */ 1113);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth-service/auth.service */ 603);
/* harmony import */ var src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/local-storage/local-storage.service */ 1021);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/notification/notification.service */ 6610);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);










function ForgotPasswordComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please enter email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ForgotPasswordComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please enter valid email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class ForgotPasswordComponent extends _common_base_login__WEBPACK_IMPORTED_MODULE_0__.BaseLogin {
  constructor(authService, localStorageService, router, notificationService) {
    super();
    this.authService = authService;
    this.localStorageService = localStorageService;
    this.router = router;
    this.notificationService = notificationService;
    this.showLoader = false;
    this.forgotPasswordForm = {
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(_constant_validation_patterns_const__WEBPACK_IMPORTED_MODULE_1__.Patterns.email)])
    };
    this.forgotForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup(this.forgotPasswordForm, []);
    this.loginUser = this.localStorageService.getLogger();
  }
  ngOnInit() {
    // if (this.loginUser) {
    //   this.router.navigateByUrl('/boss-user/home');
    // }
  }
  forgotpassword() {
    this.forgotForm.markAllAsTouched();
    if (this.forgotForm.valid) {
      this.showLoader = true;
      this.authService.forgotPassword(this.forgotForm.value).subscribe(response => {
        if (response?.status == true) {
          this.showLoader = false;
          this.router.navigateByUrl('/');
          this.notificationService.showSuccess(response?.message || 'Email sent successfully');
          console.log(response?.data);
        } else if (response?.data == null) {
          this.showLoader = false;
          this.notificationService.showError(response?.message);
        }
      }, error => {
        this.showLoader = false;
        this.notificationService.showError(error?.message || 'Something went wrong!');
      });
    }
  }
  static #_ = this.ɵfac = function ForgotPasswordComponent_Factory(t) {
    return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ForgotPasswordComponent,
    selectors: [["app-forgot-password"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
    decls: 31,
    vars: 3,
    consts: [[1, "body-login"], [1, "container", "d-flex", "justify-content-center", "align-items-center", 2, "height", "100vh", "overflow", "hidden"], [1, "row", "d-flex", "align-items-center", "justify-content-center", 2, "overflow", "hidden", "width", "100vw", "height", "100vh"], [1, "col-lg-4", "col-xl-4", "col-12", "text-center"], ["src", "assets/img/login-logo.svg", "width", "250"], [1, "col-lg-4", "col-xl-4", "col-12"], [1, "login-modal"], ["id", "SubmitEmail", 1, "login-body"], [1, "mb-4"], [1, "needs-validation", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "email", "formControlName", "email", "required", "", "placeholder", "Enter email id", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "submit", "id", "submit-btn", 1, "btn", "btn-primary", "w-100", "mt-3"], ["id", "passwordLinkSend", 1, "login-body", 2, "display", "none"], ["src", "assets/img/check.png", 1, "mb-4"], ["href", "javascript:void(0)", "routerLink", "/login"], [1, "text-danger"]],
    template: function ForgotPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "body", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "h4", 8)(9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_11_listener() {
          return ctx.forgotpassword();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 10)(13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Email id");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ForgotPasswordComponent_span_16_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ForgotPasswordComponent_span_17_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "h4", 8)(23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Great");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Your request has been submited successfully!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Password reset link send to your register email id, Please check");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Back to Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.forgotForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.forgotForm.controls.email == null ? null : ctx.forgotForm.controls.email.touched) && (ctx.forgotForm.controls.email == null ? null : ctx.forgotForm.controls.email.errors == null ? null : ctx.forgotForm.controls.email.errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.forgotForm.controls.email == null ? null : ctx.forgotForm.controls.email.touched) && (ctx.forgotForm.controls.email == null ? null : ctx.forgotForm.controls.email.errors == null ? null : ctx.forgotForm.controls.email.errors["pattern"]));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 8976:
/*!**********************************************************************!*\
  !*** ./src/app/utility/shared/components/header/header.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth-service/auth.service */ 603);
/* harmony import */ var src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/local-storage/local-storage.service */ 1021);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/notification/notification.service */ 6610);





class HeaderComponent {
  constructor(authService, localStorageService, router, notificationService) {
    this.authService = authService;
    this.localStorageService = localStorageService;
    this.router = router;
    this.notificationService = notificationService;
    this.loginUser = this.localStorageService.getLogger();
  }
  logout() {
    this.authService.logout();
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    decls: 29,
    vars: 0,
    consts: [[1, "body-welcome-page"], ["id", "header"], [1, "container", "d-flex", "align-items-center"], ["href", "javascript:void(0)", "routerLink", "/boss-user/home", 1, "logo", "me-auto"], ["src", "assets/img/wgih-logo.svg", "alt", "", 1, "img-fluid"], ["id", "navbar", 1, "navbar"], ["routerLink", "/boss-user/home", "href", "javascript:void(0)", 1, "nav-link", "active"], ["href", "javascript:void(0)", "routerLink", "/boss-user/project-list", 1, "nav-link"], [1, "bi", "bi-dot", "text-danger", "p-22"], [1, "dropdown"], ["href", "href:;"], [1, "login-avtar"], ["src", "assets/img/face1.jpg"], [1, "bi", "bi-chevron-down"], [2, "cursor", "pointer", 3, "click"], [1, "bi", "bi-list", "mobile-nav-toggle"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "body", 0)(1, "header", 1)(2, "div", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nav", 5)(6, "ul")(7, "li")(8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li")(11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Live Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "li", 9)(15, "a", 10)(16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Bos User");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "ul")(22, "li")(23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Profile Seting");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "li")(26, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_26_listener() {
          return ctx.logout();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 8351:
/*!********************************************************************!*\
  !*** ./src/app/utility/shared/components/login/login.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _constant_validation_patterns_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constant/validation-patterns.const */ 1113);
/* harmony import */ var _common_base_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/base-login */ 8535);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ 951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth-service/auth.service */ 603);
/* harmony import */ var src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/local-storage/local-storage.service */ 1021);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/notification/notification.service */ 6610);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);











function LoginComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please enter role ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function LoginComponent_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please enter email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function LoginComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please enter valid email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function LoginComponent_span_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LoginComponent_span_35_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.showHidePass());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function LoginComponent_span_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LoginComponent_span_36_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.showHidePass());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function LoginComponent_span_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please enter valid password. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function LoginComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please enter valid password. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
class LoginComponent extends _common_base_login__WEBPACK_IMPORTED_MODULE_1__.BaseLogin {
  constructor(authService, localStorageService, router, notificationService) {
    super();
    this.authService = authService;
    this.localStorageService = localStorageService;
    this.router = router;
    this.notificationService = notificationService;
    this.defaultLoginForm = {
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(_constant_validation_patterns_const__WEBPACK_IMPORTED_MODULE_0__.Patterns.email)]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(_constant_validation_patterns_const__WEBPACK_IMPORTED_MODULE_0__.Patterns.password)]),
      role: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required])
    };
    this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup(this.defaultLoginForm, []);
    this.showLoader = false;
    this.loginUser = this.localStorageService.getLogger();
  }
  ngOnInit() {
    if (this.loginUser) {
      this.router.navigateByUrl('/boss-user/home');
    }
  }
  // Function to use for the login the user
  login() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      this.showLoader = true;
      this.authService.loginUser(this.loginForm.value).subscribe(response => {
        if (response?.status == true) {
          this.localStorageService.setLoginToken(response?.data);
          this.showLoader = false;
          console.log(response?.data);
          this.tokenDecode = response?.data?.token;
          const decoded = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_2__.jwtDecode)(this.tokenDecode);
          this.loginDetails = decoded;
          this.localStorageService.setLogger(this.loginDetails);
          if (this.loginDetails?.role == 'BOS') {
            this.router.navigateByUrl('/boss-user/home');
          } else if (this.loginDetails?.role == 'SupplierAdmin') {
            this.router.navigateByUrl('/supplier-admin/supplier-home');
          } else if (this.loginDetails?.role == 'FeasibilityUser') {
            this.router.navigateByUrl('/feasibility-user/feasibility-project-list');
          }
          this.notificationService.showSuccess(response?.message || 'User login successfully');
        } else {
          this.showLoader = false;
          this.notificationService.showError(response?.message);
        }
      }, error => {
        this.showLoader = false;
        this.notificationService.showError(error?.message || 'Something went wrong!');
      });
    }
  }
  static #_ = this.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_5__.NotificationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
    decls: 44,
    vars: 9,
    consts: [[1, "body-login"], [1, "container", "d-flex", "justify-content-center", "align-items-center", 2, "height", "100vh", "overflow", "hidden"], [1, "row", "d-flex", "align-items-center", "justify-content-center", 2, "overflow", "hidden", "width", "100vw", "height", "100vh"], [1, "col-lg-4", "col-xl-4", "col-12", "text-center"], ["src", "assets/img/login-logo.svg", "width", "250"], [1, "col-lg-4", "col-xl-4", "col-12"], [1, "login-modal"], [1, "login-body"], [1, "mb-4"], [1, "needs-validation", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["formControlName", "role", 1, "form-select"], ["disabled", "", "selected", "", "hidden", "", "value", ""], ["value", "BOS"], ["value", "SupplierAdmin"], ["value", "FeasibilityUser"], ["class", "text-danger", 4, "ngIf"], ["type", "email", "formControlName", "email", "required", "", "placeholder", "Enter email id", 1, "form-control"], ["placeholder", "Enter password", "formControlName", "password", "required", "", 1, "form-control", 3, "type"], ["class", "showicon", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", "routerLink", "/forgot-password"], ["type", "submit", 1, "btn", "btn-login", "w-100"], [1, "text-danger"], [1, "showicon", 3, "click"], [1, "bi", "bi-eye-fill"], [1, "bi", "bi-eye-slash-fill"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "body", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "h4", 8)(9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Hello!");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() {
          return ctx.login();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 10)(13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "select", 11)(16, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Select User Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Bos User");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Supplier Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Feasibility User");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, LoginComponent_span_24_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 10)(26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Email id");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, LoginComponent_span_29_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, LoginComponent_span_30_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 10)(32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, LoginComponent_span_35_Template, 2, 0, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, LoginComponent_span_36_Template, 2, 0, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, LoginComponent_span_37_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, LoginComponent_span_38_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "p")(40, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.loginForm.controls.role == null ? null : ctx.loginForm.controls.role.touched) && (ctx.loginForm.controls.role == null ? null : ctx.loginForm.controls.role.errors == null ? null : ctx.loginForm.controls.role.errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.loginForm.controls.email == null ? null : ctx.loginForm.controls.email.touched) && (ctx.loginForm.controls.email == null ? null : ctx.loginForm.controls.email.errors == null ? null : ctx.loginForm.controls.email.errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.loginForm.controls.email == null ? null : ctx.loginForm.controls.email.touched) && (ctx.loginForm.controls.email == null ? null : ctx.loginForm.controls.email.errors == null ? null : ctx.loginForm.controls.email.errors["pattern"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.showPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.loginForm.controls.password == null ? null : ctx.loginForm.controls.password.touched) && (ctx.loginForm.controls.password == null ? null : ctx.loginForm.controls.password.errors == null ? null : ctx.loginForm.controls.password.errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.loginForm.controls.password == null ? null : ctx.loginForm.controls.password.touched) && (ctx.loginForm.controls.password == null ? null : ctx.loginForm.controls.password.errors == null ? null : ctx.loginForm.controls.password.errors["pattern"]));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName],
    styles: [".form-group[_ngcontent-%COMP%]   .showicon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30px;\n  right: 15px;\n  color: #5E5E5E;\n  cursor: pointer;\n  font-size: 1.5rem;\n}\n\n.body-top[_ngcontent-%COMP%] {\n  padding-top: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXRpbGl0eS9zaGFyZWQvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL1doeVFUZWNoJTIwUHJvamVjdC93ZXN0Z2V0L3dlc3RnYXRlX2FuZ3VsYXIvc3JjL2FwcC91dGlsaXR5L3NoYXJlZC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLDJCQUFBO0FDRUoiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cCAuc2hvd2ljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIGNvbG9yOiAjNUU1RTVFO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuLmJvZHktdG9we1xyXG4gICAgcGFkZGluZy10b3A6MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfSIsIi5mb3JtLWdyb3VwIC5zaG93aWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMHB4O1xuICByaWdodDogMTVweDtcbiAgY29sb3I6ICM1RTVFNUU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5ib2R5LXRvcCB7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}


/***/ }),

/***/ 8877:
/*!**************************************************************************************!*\
  !*** ./src/app/utility/shared/components/reset-password/reset-password.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResetPasswordComponent: () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _common_base_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/base-login */ 8535);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _constant_validation_patterns_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constant/validation-patterns.const */ 1113);
/* harmony import */ var _constant_custome_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constant/custome-validation */ 8783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notification/notification.service */ 6610);
/* harmony import */ var src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth-service/auth.service */ 603);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);










function ResetPasswordComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ResetPasswordComponent_span_16_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.showHidePass());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ResetPasswordComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ResetPasswordComponent_span_17_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.showHidePass());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ResetPasswordComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please enter valid password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ResetPasswordComponent_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Password length must be 8 or more and at least 1 uppercase letter, 1 number and 1 special character! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ResetPasswordComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ResetPasswordComponent_span_24_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.showHideConfirmPass());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ResetPasswordComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ResetPasswordComponent_span_25_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.showHideConfirmPass());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ResetPasswordComponent_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Confirm password don't match with set password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class ResetPasswordComponent extends _common_base_login__WEBPACK_IMPORTED_MODULE_0__.BaseLogin {
  constructor(router, notificationService, authService) {
    super();
    this.router = router;
    this.notificationService = notificationService;
    this.authService = authService;
    this.defaultResetForm = {
      confirm_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(_constant_validation_patterns_const__WEBPACK_IMPORTED_MODULE_1__.Patterns.password)]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(_constant_validation_patterns_const__WEBPACK_IMPORTED_MODULE_1__.Patterns.password)])
    };
    this.resetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup(this.defaultResetForm, [_constant_custome_validation__WEBPACK_IMPORTED_MODULE_2__.CustomValidation.MatchValidator('password', 'confirm_password')]);
    this.showLoader = false;
    // this.forgotUserEmail = this.router.getCurrentNavigation()?.extras?.state?.['email'];
    // this.resetForm.controls.email.setValue(this.forgotUserEmail);
    // if (!this.forgotUserEmail) {
    //   this.router.navigateByUrl('/auth/forgot-password');
    // }
  }

  ngOnInit() {}
  // Function use for the reset-password
  resetPassword() {
    this.resetForm.markAllAsTouched();
    if (this.resetForm.valid) {
      this.showLoader = true;
      this.authService.forgotPassword(this.resetForm.value).subscribe(response => {
        if (response?.status === true) {
          this.notificationService.showSuccess(response?.message);
          this.router.navigateByUrl('/');
          this.showLoader = false;
        } else {
          this.notificationService.showError(response?.message);
          this.showLoader = false;
        }
      }, error => {
        this.notificationService.showError(error?.message);
        this.showLoader = false;
      });
    }
  }
  static #_ = this.ɵfac = function ResetPasswordComponent_Factory(t) {
    return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ResetPasswordComponent,
    selectors: [["app-reset-password"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
    decls: 29,
    vars: 10,
    consts: [[1, "body-login"], [1, "container", "d-flex", "justify-content-center", "align-items-center", 2, "height", "100vh", "overflow", "hidden"], [1, "row", "d-flex", "align-items-center", "justify-content-center", 2, "overflow", "hidden", "width", "100vw", "height", "100vh"], [1, "col-lg-4", "col-xl-4", "col-12", "text-center"], ["src", "assets/img/login-logo.svg", "width", "250"], [1, "col-lg-4", "col-xl-4", "col-12"], [1, "login-modal"], [1, "login-body"], [1, "mb-4"], [1, "needs-validation", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "password", "placeholder", "Enter new password", "formControlName", "password", "required", "", 1, "form-control", 3, "type"], ["class", "showicon", 3, "click", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], ["type", "password", "placeholder", "Enter new password", "formControlName", "confirm_password", "required", "", 1, "form-control", 3, "type"], ["type", "submit", 1, "btn", "btn-primary", "w-100", "mt-3"], [1, "showicon", 3, "click"], [1, "bi", "bi-eye-fill"], [1, "bi", "bi-eye-slash-fill"], [1, "text-danger"]],
    template: function ResetPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "body", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "h4", 8)(9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_11_listener() {
          return ctx.resetPassword();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 10)(13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ResetPasswordComponent_span_16_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ResetPasswordComponent_span_17_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, ResetPasswordComponent_span_18_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, ResetPasswordComponent_span_19_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 10)(21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, ResetPasswordComponent_span_24_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, ResetPasswordComponent_span_25_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, ResetPasswordComponent_span_26_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.resetForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.showPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.resetForm.controls.password == null ? null : ctx.resetForm.controls.password.touched) && (ctx.resetForm.controls.password == null ? null : ctx.resetForm.controls.password.errors == null ? null : ctx.resetForm.controls.password.errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.resetForm.controls.password == null ? null : ctx.resetForm.controls.password.touched) && (ctx.resetForm.controls.password == null ? null : ctx.resetForm.controls.password.errors == null ? null : ctx.resetForm.controls.password.errors["pattern"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx.confirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.showConfPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showConfPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.resetForm.getError("mismatch"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 5605:
/*!****************************************************************************************!*\
  !*** ./src/app/utility/shared/components/supplier-header/supplier-header.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupplierHeaderComponent: () => (/* binding */ SupplierHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth-service/auth.service */ 603);
/* harmony import */ var src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/local-storage/local-storage.service */ 1021);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/notification/notification.service */ 6610);





class SupplierHeaderComponent {
  constructor(authService, localStorageService, router, notificationService) {
    this.authService = authService;
    this.localStorageService = localStorageService;
    this.router = router;
    this.notificationService = notificationService;
    this.loginUser = this.localStorageService.getLogger();
  }
  logout() {
    this.authService.logout();
  }
  static #_ = this.ɵfac = function SupplierHeaderComponent_Factory(t) {
    return new (t || SupplierHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: SupplierHeaderComponent,
    selectors: [["app-supplier-header"]],
    decls: 33,
    vars: 0,
    consts: [["id", "header"], [1, "container", "d-flex", "align-items-center"], ["href", "supplier-admin/supplier-home", 1, "logo", "me-auto"], ["src", "assets/img/wgih-logo.svg", "alt", "", 1, "img-fluid"], ["id", "navbar", 1, "navbar"], ["routerLink", "/supplier-admin/supplier-dashboard", 1, "nav-link", "active"], ["routerLink", "/supplier-admin/project-list", 1, "nav-link"], ["routerLink", "/supplier-admin/case-studies-list", 1, "nav-link"], ["routerLink", "/supplier-admin/manage-user", 1, "nav-link"], [1, "dropdown"], ["href", "javascript:;"], [1, "login-avtar"], ["src", "assets/img/face1.jpg"], [1, "bi", "bi-chevron-down"], ["href", "href:;"], [2, "cursor", "pointer", 3, "click"], [1, "bi", "bi-list", "mobile-nav-toggle"]],
    template: function SupplierHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nav", 4)(5, "ul")(6, "li")(7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li")(10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li")(13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Case Studies");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "li")(16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Manage Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "li", 9)(19, "a", 10)(20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Supplier User");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "ul")(26, "li")(27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Profile Seting");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "li")(30, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SupplierHeaderComponent_Template_a_click_30_listener() {
          return ctx.logout();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 8783:
/*!***************************************************************!*\
  !*** ./src/app/utility/shared/constant/custome-validation.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomValidation: () => (/* binding */ CustomValidation)
/* harmony export */ });
class CustomValidation {
  static MatchValidator(source, target) {
    return control => {
      const sourceCtrl = control.get(source);
      const targetCtrl = control.get(target);
      return sourceCtrl && targetCtrl && sourceCtrl.value != targetCtrl.value ? {
        mismatch: true
      } : null;
    };
  }
  NumberOnly(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}

/***/ }),

/***/ 7005:
/*!****************************************************************!*\
  !*** ./src/app/utility/shared/constant/pagination.constant.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pagination: () => (/* binding */ pagination)
/* harmony export */ });
const pagination = {
  page: 1,
  itemsPerPage: 10,
  totalRecords: 0
};

/***/ }),

/***/ 5557:
/*!**********************************************************!*\
  !*** ./src/app/utility/shared/constant/payload.const.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Payload: () => (/* binding */ Payload)
/* harmony export */ });
const Payload = {
  projectList: {
    keyword: '',
    page: '1',
    limit: '10',
    applied: false,
    sortlist: false
  },
  mailSSList: {
    keyword: '',
    page: '1',
    limit: '10'
  }
};

/***/ }),

/***/ 1113:
/*!**********************************************************************!*\
  !*** ./src/app/utility/shared/constant/validation-patterns.const.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Patterns: () => (/* binding */ Patterns)
/* harmony export */ });
const Patterns = {
  mobile: "^((\\+91-?)|0)?[0-9]{10}$",
  email: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$',
  otp: '[0-9]',
  password: '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$',
  name: '^[a-zA-Z ]*$',
  companyName: '^(?=.*[a-zA-Z])[\w\s.@&()]+$'
};

/***/ }),

/***/ 8713:
/*!*********************************************************************************!*\
  !*** ./src/app/utility/shared/pop-ups/view-document/view-document.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewDocumentComponent: () => (/* binding */ ViewDocumentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);


class ViewDocumentComponent {
  constructor(activeModal) {
    this.activeModal = activeModal;
  }
  ngOnInit() {
    console.log('userDetails', this.documentData);
  }
  close(flag) {
    this.activeModal.close(flag);
  }
  static #_ = this.ɵfac = function ViewDocumentComponent_Factory(t) {
    return new (t || ViewDocumentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ViewDocumentComponent,
    selectors: [["app-view-document"]],
    decls: 14,
    vars: 0,
    consts: [[1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "ViewScreenshotLabel", 1, "modal-title"], ["type", "button", 1, "btn-close"], [1, "modal-body"], ["src", "assets/img/screenshot.png", 1, "img-fluid"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary"]],
    template: function ViewDocumentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "FOI Screenshot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8)(10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 7313:
/*!*************************************************!*\
  !*** ./src/app/utility/shared/shared.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);




class SharedModule {
  static #_ = this.ɵfac = function SharedModule_Factory(t) {
    return new (t || SharedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: SharedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModule]
  });
})();

/***/ }),

/***/ 9947:
/*!****************************************!*\
  !*** ./src/environment/environment.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  url: "http://localhost:4200",
  //  baseUrl : 'http://192.168.1.7:4100',
  baseUrl: 'http://13.201.125.202/api/v1'
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map