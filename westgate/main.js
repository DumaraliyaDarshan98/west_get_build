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
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_supplier-admin_supplier-admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/supplier-admin/supplier-admin.module */ 6377)).then(m => m.SupplierAdminModule)
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _utility_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility/shared/shared.module */ 7313);
/* harmony import */ var _modules_bos_user_bos_user_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/bos-user/bos-user.module */ 6475);
/* harmony import */ var _utility_shared_components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utility/shared/components/reset-password/reset-password.component */ 8877);
/* harmony import */ var _utility_shared_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utility/shared/components/forgot-password/forgot-password.component */ 7427);
/* harmony import */ var _utility_shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utility/shared/components/login/login.component */ 8351);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _utility_interceptor_ApiInterceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utility/interceptor/ApiInterceptor */ 6306);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _modules_supplier_admin_supplier_dashboard_supplier_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/supplier-admin/supplier-dashboard/supplier-dashboard.component */ 4742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
















class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS,
      useClass: _utility_interceptor_ApiInterceptor__WEBPACK_IMPORTED_MODULE_7__.APIInterceptor,
      multi: true
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _modules_bos_user_bos_user_module__WEBPACK_IMPORTED_MODULE_3__.BOSUserModule, _utility_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false
    })]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _utility_shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_6__.LoginComponent, _utility_shared_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__.ForgotPasswordComponent, _utility_shared_components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__.ResetPasswordComponent, _modules_supplier_admin_supplier_dashboard_supplier_dashboard_component__WEBPACK_IMPORTED_MODULE_8__.SupplierDashboardComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _modules_bos_user_bos_user_module__WEBPACK_IMPORTED_MODULE_3__.BOSUserModule, _utility_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrModule]
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
    consts: [["id", "main"], [1, "container"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-lg-5", "col-xl-5", "col-12"], [1, "row", "mb-3"], ["for", "inputEmail3", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["formControlName", "projectName", "rows", "3", "cols", "100", 1, "form-control"], ["formControlName", "BOSID", "type", "text", 1, "form-control"], ["formControlName", "publishDate", "type", "text", "placeholder", "Auto Detect System Calendar", 1, "form-control"], [1, "col-4"], [1, "form-select"], [1, "row", "mt-2"], [1, "col-6"], ["formControlName", "website", 1, "form-select"], ["disabled", "", "selected", "", "hidden", "", "value", ""], ["value", "Proactis"], ["value", "FindmyTender"], ["value", "TendersDirect"], [1, "col-lg-7", "col-xl-7", "col-12"], [1, "col-lg-6", "col-xl-6", "col-12"], ["formControlName", "category", 1, "form-select"], ["formControlName", "industry", 1, "form-select"], ["for", "inputEmail3", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["formControlName", "description", "rows", "3", "cols", "100", 1, "form-control"], ["formControlName", "link", "type", "text", 1, "form-control"], ["formControlName", "periodOfContractStart", "type", "date", "placeholder", "Start Date", 1, "form-control"], ["formControlName", "periodOfContractEnd", "type", "date", "placeholder", "End Date", 1, "form-control"], ["formControlName", "value", "type", "number", 1, "form-control"], ["formControlName", "projectType", 1, "form-select"], ["value", "Development"], ["value", "Product"], ["value", "Service"], ["formControlName", "mailID", "type", "email", 1, "form-control"], [1, "row", "mt-5"], ["formControlName", "clientType", 1, "form-select"], ["value", "PublicSector"], ["value", "PrivateSector"], ["formControlName", "clientName", "type", "text", 1, "form-control"], [1, "row", "mt-4"], [1, "col-12", "text-end"], ["type", "submit", 1, "btn", "btn-primary"]],
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](133, "Period Of Contract");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BossUserLiveProjectListingComponent_tr_51_Template_a_click_31_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.editProjectDetails(item_r1 == null ? null : item_r1._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "i", 26);
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
  searchtext() {
    this.showLoader = true;
    // Payload.projectList.keyword = this.searchText || '';
    // Payload.projectList.page = String(this.page);
    // Payload.projectList.limit = String(this.pagesize);
    let params = {
      keyword: this.searchText || '',
      page: String(this.page),
      limit: String(this.pagesize)
    };
    console.log(src_app_utility_shared_constant_payload_const__WEBPACK_IMPORTED_MODULE_1__.Payload.projectList);
    this.projectService.getProjectList(params).subscribe(response => {
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
    consts: [["id", "main"], [1, "container"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-lg-4", "col-xl-4", "col-12", "mob-mb1"], [1, "form-group", "mb-0"], [1, "input-icon"], [1, "bi", "bi-search"], ["placeholder", "Search", "type", "text", 1, "form-control", "control-search", 3, "ngModel", "ngModelChange", "input"], [1, "col-lg-2", "col-xl-2", "col-12", "mob-mb1"], ["id", "navbar", 1, "navbar"], [1, "dropdown"], [1, "btn", "btn-outline-white", "w-100"], ["routerLink", "/boss-user/add-project"], [2, "cursor", "pointer"], [1, "table-responsive", "mt-5", "mb-3"], [1, "table", "table-striped", "align-middle"], ["width", "200px"], [4, "ngFor", "ngForOf"], [1, "row", "mt-3", "align-items-center"], [1, "row"], [1, "pagination"], [3, "pageChange"], ["v-align", "middle"], [3, "href"], [1, "action-btn", 2, "cursor", "pointer", 3, "click"], [1, "bi", "bi-eye-fill"], [1, "bi", "bi-pencil-fill"]],
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
function BossUserViewProjectComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21)(1, "div", 38)(2, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "No Record Found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function BossUserViewProjectComponent_ng_container_94_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21)(1, "div", 3)(2, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 40)(5, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BossUserViewProjectComponent_ng_container_94_div_1_Template_a_click_5_listener() {
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
function BossUserViewProjectComponent_ng_container_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BossUserViewProjectComponent_ng_container_94_div_1_Template, 12, 1, "div", 39);
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
        this.projectDetails = response?.data[0];
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
    decls: 115,
    vars: 38,
    consts: [["id", "main"], [1, "container"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-lg-4", "col-xl-4", "col-12", "mob-mb1"], [1, "form-group", "mb-0"], [1, "input-icon"], [1, "bi", "bi-search"], ["type", "search", "placeholder", "Search", 1, "form-control", "control-search"], [1, "col-lg-2", "col-xl-2", "col-12", "mob-mb1"], ["routerLink", "/boss-user/project-list", 1, "btn", "btn-outline-white", "w-100"], [1, "bi", "bi-arrow-left"], [1, "table-responsive", "mt-5", "mb-3"], [1, "table", "table-striped", "align-middle"], ["width", "200px"], ["v-align", "middle"], [3, "href"], [1, "text-theme"], [1, "row", "mt-5"], [1, "col-lg-4", "col-xl-4", "col-12", "mb-4"], [1, "card"], [1, "card-body"], [1, "row", "align-items-center"], [1, "col-lg-4", "col-xl-4", "col-12"], [1, "col-lg-7", "col-xl-7", "col-12"], [1, "p-13", "mb-0"], [1, "mb-0"], ["class", "row align-items-center", 4, "ngIf"], [4, "ngIf"], [1, "card-body", "text-center"], [1, "p-13"], ["id", "ViewScreenshot", "tabindex", "-1", "aria-labelledby", "ViewScreenshotLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "ViewScreenshotLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "img-fluid", 3, "src"], [1, "col-lg-12", "col-xl-12", "col-12", "mob-mb1"], ["class", "row align-items-center", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-xl-4", "col-6"], ["data-bs-toggle", "modal", "data-bs-target", "#ViewScreenshot", 1, "btn", "btn-small", "w-100", 3, "click"], [1, "bi", "bi-eye-fill"], ["href", "", "data-bs-toggle", "modal", "data-bs-target", "#fioScreenshot", 1, "btn", "btn-small", "w-100"], [1, "bi", "bi-file-earmark-arrow-down-fill"]],
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](67, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "h4", 16)(69, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Project Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 17)(74, "div", 18)(75, "div", 19)(76, "div", 20)(77, "div", 21)(78, "div", 22)(79, "h6", 16)(80, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Client Detils");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 23)(83, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 18)(90, "div", 3)(91, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "FOI Screenshot");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](93, BossUserViewProjectComponent_div_93_Template, 4, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](94, BossUserViewProjectComponent_ng_container_94_Template, 2, 1, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 18)(96, "div", 19)(97, "div", 28)(98, "p", 29)(99, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](101, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](102, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "p", 29)(104, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 30)(107, "div", 31)(108, "div", 32)(109, "div", 33)(110, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](112, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](114, "img", 37);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.dateDifference);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](67, 29, ctx.projectDetails == null ? null : ctx.projectDetails.dueDate, "MM/dd/yyyy, h:mm a"));
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Period of Contract: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](101, 32, ctx.projectDetails == null ? null : ctx.projectDetails.periodOfContractStart, "MM/dd/yyyy"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](102, 35, ctx.projectDetails == null ? null : ctx.projectDetails.periodOfContractEnd, "MM/dd/yyyy"), "");
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
    consts: [["id", "main"], [1, "container"], [1, "row"], [1, "col-12", "mob-mb1", "text-end"], ["routerLink", "/boss-user/foi-document-list", 1, "btn", "btn-outline-white"], ["class", "row mb-3 align-items-center", 4, "ngFor", "ngForOf"], [3, "formGroup", "ngSubmit"], [1, "row", "mb-3", "align-items-center"], ["for", "inputEmail3", 1, "col-sm-2", "col-form-label"], [1, "col-sm-6"], ["type", "text", "formControlName", "name", 1, "form-control"], ["class", "text-danger", "style", "color: red;", 4, "ngIf"], [1, "col-sm-2"], [1, "upload-btn-wrapper"], ["for", "fileInput", 1, "btn-upload-file"], [1, "bi", "bi-file-earmark-arrow-up-fill"], ["type", "file", "id", "fileInput", "name", "myfile", 2, "height", "10px", "width", "10px", 3, "change"], ["type", "submit", 1, "btn", "btn-dark"], ["id", "ViewScreenshot", "tabindex", "-1", "aria-labelledby", "ViewScreenshotLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header", 2, "display", "flex", "justify-content", "space-between"], ["id", "ViewScreenshotLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "img-fluid", 3, "src"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], [1, "col-lg-4", "col-xl-4", "col-6"], ["disabled", "", "type", "text", 1, "form-control", 3, "value"], [1, "col-lg-3", "col-xl-3", "col-3"], ["data-bs-toggle", "modal", "data-bs-target", "#ViewScreenshot", 1, "btn", "btn-small", "w-100", 3, "click"], [1, "bi", "bi-eye-fill"], ["href", "", "data-bs-toggle", "modal", "data-bs-target", "#fioScreenshot", 1, "btn", "btn-small", "w-100"], [1, "bi", "bi-trash3-fill"], [1, "text-danger", 2, "color", "red"]],
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FioDocumentListComponent_tr_38_Template_a_click_31_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.addFoiDetails(item_r1 == null ? null : item_r1._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "i", 20);
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
    // Payload.projectList.keyword = this.searchText || '';
    // Payload.projectList.page = String(this.page);
    // Payload.projectList.limit = String(this.pagesize);
    let params = {
      keyword: this.searchText || '',
      page: String(this.page),
      limit: String(this.pagesize)
    };
    this.projectService.getProjectList(params).subscribe(response => {
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
    consts: [["id", "main"], [1, "container"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-lg-4", "col-xl-4", "col-12", "mob-mb1"], [1, "form-group", "mb-0"], [1, "input-icon"], [1, "bi", "bi-search"], ["placeholder", "Search", "type", "text", 1, "form-control", "control-search", 3, "ngModel", "ngModelChange", "input"], [1, "table-responsive", "mt-5", "mb-3"], [1, "table", "table-striped", "align-middle"], ["width", "200px"], [4, "ngFor", "ngForOf"], [1, "row", "mt-3", "align-items-center"], [1, "row"], [1, "pagination"], [3, "pageChange"], ["v-align", "middle"], [3, "href"], [1, "action-btn", 3, "click"], [1, "bi", "bi-eye-fill"], [1, "bi", "bi-file-earmark-arrow-up-fill"]],
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
  static #_ = this.ɵfac = function MailScreenshotAddEditComponent_Factory(t) {
    return new (t || MailScreenshotAddEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_mailscreenshot_service_mailscreenshot_service__WEBPACK_IMPORTED_MODULE_2__.MailscreenshotService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: MailScreenshotAddEditComponent,
    selectors: [["app-mail-screenshot-add-edit"]],
    decls: 56,
    vars: 14,
    consts: [["id", "main"], [1, "container"], [1, "row", "align-items-center", "justify-content-end", "mb-4"], [1, "col-auto", "mob-mb1"], ["href", "live-projects.html", 1, "btn", "btn-outline-white", "w-100"], [1, "bi", "bi-arrow-left"], [3, "formGroup", "ngSubmit"], [1, "row", "mb-3", "align-items-center"], [1, "col-sm-3"], ["type", "text", "formControlName", "projectName", "placeholder", "Project Name", 1, "form-control"], ["class", "text-danger", "style", "color: red;", 4, "ngIf"], [1, "col-sm-2"], ["type", "text", "formControlName", "BOSId", "placeholder", "BOS ID", 1, "form-control"], ["type", "email", "formControlName", "emailId", "placeholder", "Enter Email ID", 1, "form-control"], [1, "upload-btn-wrapper"], ["for", "fileInput", 1, "btn-upload-file"], [1, "bi", "bi-file-earmark-arrow-up-fill"], ["type", "file", "id", "fileInput", "name", "myfile", 2, "height", "10px", "width", "10px", 3, "change"], ["type", "submit", 1, "btn", "btn-primary", "w-100"], [1, "table-responsive", "mt-5", "mb-3"], [1, "table", "table-striped", "align-middle"], [4, "ngFor", "ngForOf"], [1, "row", "mt-3", "align-items-center"], [1, "row"], [1, "pagination"], [3, "pageChange"], ["id", "ViewScreenshot", "tabindex", "-1", "aria-labelledby", "ViewScreenshotLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "ViewScreenshotLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "img-fluid", 3, "src"], [1, "text-danger", 2, "color", "red"], ["href", "javascript:;"], ["v-align", "middle"], ["data-bs-toggle", "modal", "data-bs-target", "#ViewScreenshot", 1, "btn", "btn-small", "me-2", 3, "click"], [1, "bi", "bi-eye-fill"], ["href", "javascript:;", 1, "btn", "btn-small"], [1, "bi", "bi-file-earmark-arrow-down-fill"]],
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
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.PaginationControlsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.PaginatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class SupplierDashboardComponent {
  static #_ = this.ɵfac = function SupplierDashboardComponent_Factory(t) {
    return new (t || SupplierDashboardComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SupplierDashboardComponent,
    selectors: [["app-supplier-dashboard"]],
    decls: 88,
    vars: 0,
    consts: [["id", "main"], [1, "dashboard-section"], [1, "container"], [1, "row"], [1, "col-lg-6", "col-xl-6", "col-sm-6", "col-md-6", "col-12", "mb-5"], [1, "statistic-card"], [1, "card-body"], [1, "row", "align-items-center"], [1, "col-8"], [1, "col-4"], [1, "text-blue"], ["routerLink", "/supplier-admin/total-projects-in-category", 1, "explore-btn", "bg-blue", "w-100"], [1, "text-green"], ["routerLink", "/supplier-admin/projects-applied", 1, "explore-btn", "bg-green", "w-100"], [1, "text-teal"], ["routerLink", "/supplier-admin/projects-matched", 1, "explore-btn", "bg-teal", "w-100"], [1, "text-brown"], ["routerLink", "/supplier-admin/projects-applied", 1, "explore-btn", "bg-brown", "w-100"], [1, "text-light-purple"], ["routerLink", "/supplier-admin/projects-applied", 1, "explore-btn", "bg-light-purple", "w-100"], [1, "text-dark-gray"], ["routerLink", "/supplier-admin/projects-applied", 1, "explore-btn", "bg-dark-gray", "w-100"]],
    template: function SupplierDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "p")(10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Total Projects in my category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9)(13, "h2", 10)(14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "125");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4)(19, "div", 5)(20, "div", 6)(21, "div", 7)(22, "div", 8)(23, "p")(24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Awarded");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9)(27, "h2", 12)(28, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4)(33, "div", 5)(34, "div", 6)(35, "div", 7)(36, "div", 8)(37, "p")(38, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Total matched");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9)(41, "h2", 14)(42, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4)(47, "div", 5)(48, "div", 6)(49, "div", 7)(50, "div", 8)(51, "p")(52, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Not Awarded");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 9)(55, "h2", 16)(56, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 4)(61, "div", 5)(62, "div", 6)(63, "div", 7)(64, "div", 8)(65, "p")(66, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Total Submitted");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 9)(69, "h2", 18)(70, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 4)(75, "div", 5)(76, "div", 6)(77, "div", 7)(78, "div", 8)(79, "p")(80, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Expired History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 9)(83, "h2", 20)(84, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
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
    return JSON.parse(loginUser);
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _constant_validation_patterns_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constant/validation-patterns.const */ 1113);
/* harmony import */ var _common_base_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/base-login */ 8535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth-service/auth.service */ 603);
/* harmony import */ var src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/local-storage/local-storage.service */ 1021);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/notification/notification.service */ 6610);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);










function LoginComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please enter email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LoginComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please enter valid email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LoginComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_span_22_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.showHidePass());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LoginComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_span_23_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.showHidePass());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LoginComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please enter valid password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LoginComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please enter valid password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
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
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(_constant_validation_patterns_const__WEBPACK_IMPORTED_MODULE_0__.Patterns.email)]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(_constant_validation_patterns_const__WEBPACK_IMPORTED_MODULE_0__.Patterns.password)])
    };
    this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup(this.defaultLoginForm, []);
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
          this.localStorageService.setLogger(response?.data);
          this.showLoader = false;
          this.router.navigateByUrl('/boss-user/home');
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
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
    decls: 31,
    vars: 7,
    consts: [[1, "body-login"], [1, "container", "d-flex", "justify-content-center", "align-items-center", 2, "height", "100vh", "overflow", "hidden"], [1, "row", "d-flex", "align-items-center", "justify-content-center", 2, "overflow", "hidden", "width", "100vw", "height", "100vh"], [1, "col-lg-4", "col-xl-4", "col-12", "text-center"], ["src", "assets/img/login-logo.svg", "width", "250"], [1, "col-lg-4", "col-xl-4", "col-12"], [1, "login-modal"], [1, "login-body"], [1, "mb-4"], [1, "needs-validation", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "email", "formControlName", "email", "required", "", "placeholder", "Enter email id", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "password", "placeholder", "Enter password", "formControlName", "password", "required", "", 1, "form-control"], ["class", "showicon", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", "routerLink", "/forgot-password"], ["type", "submit", 1, "btn", "btn-login", "w-100"], [1, "text-danger"], [1, "showicon", 3, "click"], [1, "bi", "bi-eye-fill"], [1, "bi", "bi-eye-slash-fill"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "body", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "h4", 8)(9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Hello!");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() {
          return ctx.login();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 10)(13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Email id");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, LoginComponent_span_16_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, LoginComponent_span_17_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 10)(19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, LoginComponent_span_22_Template, 2, 0, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, LoginComponent_span_23_Template, 2, 0, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, LoginComponent_span_24_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, LoginComponent_span_25_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "p")(27, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.loginForm.controls.email == null ? null : ctx.loginForm.controls.email.touched) && (ctx.loginForm.controls.email == null ? null : ctx.loginForm.controls.email.errors == null ? null : ctx.loginForm.controls.email.errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.loginForm.controls.email == null ? null : ctx.loginForm.controls.email.touched) && (ctx.loginForm.controls.email == null ? null : ctx.loginForm.controls.email.errors == null ? null : ctx.loginForm.controls.email.errors["pattern"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.showPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.loginForm.controls.password == null ? null : ctx.loginForm.controls.password.touched) && (ctx.loginForm.controls.password == null ? null : ctx.loginForm.controls.password.errors == null ? null : ctx.loginForm.controls.password.errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.loginForm.controls.password == null ? null : ctx.loginForm.controls.password.touched) && (ctx.loginForm.controls.password == null ? null : ctx.loginForm.controls.password.errors == null ? null : ctx.loginForm.controls.password.errors["pattern"]));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
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
    limit: '10'
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