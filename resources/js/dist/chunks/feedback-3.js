"use strict";
(globalThis["webpackChunkplentymarkets_feedback"] = globalThis["webpackChunkplentymarkets_feedback"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FeedbackForm_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeedbackForm.vue */ "./resources/js/src/app/components/item/singleitem/FeedbackForm.vue");
/* harmony import */ var _FeedbackList_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedbackList.vue */ "./resources/js/src/app/components/item/singleitem/FeedbackList.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_loadFeedbackModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../mixins/loadFeedbackModule */ "./resources/js/src/app/mixins/loadFeedbackModule.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'FeedbackContainer',
  components: {
    'feedback-form': _FeedbackForm_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    'feedback-list': _FeedbackList_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mixins: [_mixins_loadFeedbackModule__WEBPACK_IMPORTED_MODULE_2__["default"]],
  inject: {
    itemId: {
      default: null
    }
  },
  props: {
    options: Object,
    classes: String,
    styles: String
  },
  data() {
    return {
      isLoading: true,
      feedbackToDelete: null,
      optionsList: {
        timestampVisibility: this.options.timestampVisibility,
        allowGuestFeedbacks: this.options.allowGuestFeedbacks
      },
      language: this.options.language,
      optionsForm: {
        allowFeedbacksOnlyIfPurchased: this.options.allowFeedbacksOnlyIfPurchased,
        numberOfFeedbacks: this.options.numberOfFeedbacks,
        allowGuestFeedbacks: this.options.allowGuestFeedbacks
      }
    };
  },
  computed: _objectSpread({
    currentVariation: function () {
      return this.$store.getters[this.itemId + '/currentItemVariation'];
    },
    variationId: function () {
      return this.currentVariation && this.currentVariation.variation.id;
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapState)({
    authenticatedUser: state => state.feedback.authenticatedUser,
    counts: state => state.feedback.counts,
    feedbacks: state => state.feedback.feedbacks,
    invisibleFeedbacks: state => state.feedback.invisibleFeedbacks,
    pagination: state => state.feedback.pagination
  })),
  mounted() {
    if (!App.isShopBuilder) {
      const _self = this;
      $.when(this.getUser(), this.loadFeedbacks()).done(function () {
        _self.isLoading = false;
        _self.generateJsonLD();
        Vue.nextTick(function () {
          // DOM updated
          window.dispatchEvent(new Event('resize'));
        });
      });
    } else {
      this.isLoading = false;
    }
  },
  methods: {
    getUser() {
      return this.$store.dispatch('loadFeedbackUser', {
        data: {
          allowFeedbacksOnlyIfPurchased: this.options.allowFeedbacksOnlyIfPurchased,
          numberOfFeedbacks: this.options.numberOfFeedbacks
        },
        itemId: this.itemId,
        variationId: this.variationId
      });
    },
    loadFeedbacks() {
      return this.$store.dispatch('loadPaginatedFeedbacks', {
        itemId: this.itemId,
        feedbacksPerPage: this.options.feedbacksPerPage,
        language: this.options.language
      });
    },
    showDeleteConfirmation(feedbackToDelete) {
      this.feedbackToDelete = feedbackToDelete;
      $(this.$refs.confirmDeleteModal).modal('show');
    },
    deleteFeedback() {
      if (this.feedbackToDelete !== null) {
        const feedbackId = this.feedbackToDelete.feedbackId;
        const parentFeedbackId = this.feedbackToDelete.parentFeedbackId;
        this.$store.dispatch('deleteFeedback', {
          feedbackId: feedbackId,
          parentFeedbackId: parentFeedbackId,
          feedback: this.feedbackToDelete.feedbackObject
        });
      }
      $(this.$refs.confirmDeleteModal).modal('hide');
    },
    generateJsonLD() {
      if (this.counts.ratingsCountTotal > 0) {
        const jsonld = {
          '@context': 'http://schema.org/',
          '@type': 'Product',
          '@id': this.variationId.toString(),
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: this.counts.averageValue,
            reviewCount: this.counts.ratingsCountTotal
          },
          review: []
        };
        const anonymous = this.$translate('Feedback::Feedback.anonymous') || 'Anonymous';
        this.feedbacks.forEach(function (feedback) {
          let author;
          if ((feedback.sourceRelation[0].feedbackRelationType === 'user' || feedback.sourceRelation[0].feedbackRelationType === 'contact') && feedback.sourceRelation[0].feedbackRelationSourceId > 0) {
            author = feedback.sourceRelation[0].sourceRelationLabel;
          } else if (feedback.sourceRelation[0].feedbackRelationSourceId === '0' && feedback.authorName.trim().length > 0) {
            author = feedback.authorName;
          } else {
            author = anonymous;
          }
          const review = {
            '@type': 'Review',
            author: {
              name: author,
              '@type': 'Person'
            },
            datePublished: feedback.createdAt,
            reviewBody: feedback.feedbackComment.comment.message,
            name: feedback.title,
            reviewRating: {
              '@type': 'Rating',
              ratingValue: feedback.feedbackRating.rating.ratingValue
            }
          };
          jsonld.review.push(review);
        });
        const script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.textContent = JSON.stringify(jsonld);
        document.head.appendChild(script);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'FeedbackForm',
  props: {
    variationId: Number,
    options: Object
  },
  data() {
    return {
      feedback: {
        ratingValue: 0,
        authorName: '',
        title: '',
        message: '',
        type: 'review',
        targetId: this.variationId,
        honeypot: ''
      },
      isLoading: false,
      titleMissing: false,
      ratingMissing: false
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)({
    authenticatedUser: state => state.feedback.authenticatedUser
  })),
  methods: {
    createFeedback() {
      if (this.isLoading) {
        return;
      }
      if (this.feedback.honeypot.length > 0) {
        return;
      }
      if (this.feedback.ratingValue <= 0) {
        this.ratingMissing = true;
        return;
      }
      if (!this.feedback.title) {
        this.titleMissing = true;
        return;
      }
      this.isLoading = true;
      $.ajax({
        type: 'POST',
        url: '/rest/feedbacks/feedback/create',
        data: this.feedback,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: 'json',
        xhrFields: {
          withCredentials: true
        },
        success: data => {
          this.$store.commit('addFeedback', data);
          this.isLoading = false;
          this.feedback.authorName = '';
          this.feedback.message = '';
          this.feedback.title = '';
          this.feedback.ratingValue = 0;
          this.titleMissing = false;
          this.ratingMissing = false;
          window.CeresNotification.success(this.$translate('Feedback::Feedback.notificationSuccess')).closeAfter(3000);
        },
        error: (jqXHR, textStatus, errorThrown) => {
          console.error(errorThrown);
          this.isLoading = false;
          window.CeresNotification.error(this.$translate('Feedback::Feedback.notificationFailure')).closeAfter(3000);
        }
      });
    },
    createLoginModal() {
      this.$store.dispatch('loadComponent', 'login-modal');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FeedbackListEntry_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeedbackListEntry.vue */ "./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'FeedbackList',
  components: {
    'feedback-list-entry': _FeedbackListEntry_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    feedbacks: Array,
    isLastPage: Boolean,
    showControls: Boolean,
    classes: String,
    styles: String,
    options: Object
  },
  methods: {
    onLoadMoreClicked() {
      this.$emit('load-more');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'FeedbackListEntry',
  components: {
    'feedback-comment': () => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(__webpack_require__, /*! ./FeedbackComment.vue */ "./resources/js/src/app/components/item/singleitem/FeedbackComment.vue"))
  },
  props: {
    feedback: Object,
    isReply: Boolean,
    showControls: Boolean,
    classes: String,
    styles: String,
    options: Object
  },
  data() {
    return {
      editableFeedback: null,
      isLoading: false,
      feedbackData: {}
    };
  },
  created() {
    this.feedbackData = this.feedback;
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)({
    authenticatedUser: state => state.feedback.authenticatedUser
  })),
  methods: {
    showDeleteConfirmation() {
      let parentFeedbackId = null;
      if (this.isReply) {
        parentFeedbackId = parseInt(this.feedbackData.targetRelation.feedbackRelationTargetId);
      }
      this.$emit('delete', {
        feedbackId: this.feedbackData.id,
        isReply: this.isReply,
        parentFeedbackId: parentFeedbackId,
        feedbackObject: this.feedbackData
      });
    },
    editFeedback() {
      if (this.editableFeedback === null) {
        $(this.$refs.editButton).tooltip('dispose');
        this.editableFeedback = {
          title: '',
          message: this.feedbackData.feedbackComment.comment.message,
          ratingValue: -1,
          isReply: this.isReply
        };
        if (!this.isReply) {
          this.editableFeedback.title = this.feedbackData.title;
          this.editableFeedback.ratingValue = this.feedbackData.feedbackRating.rating.ratingValue;
        }
      }
    },
    saveEditableFeedback() {
      const _self = this;
      if (this.editableFeedback !== null) {
        const editableFeedback = this.editableFeedback;
        const requestBody = {
          message: editableFeedback.message
        };
        if (!editableFeedback.isReply) {
          requestBody.title = editableFeedback.title;
          requestBody.ratingValue = editableFeedback.ratingValue;
        }
        this.isLoading = true;
        $.ajax({
          type: 'PUT',
          url: '/rest/feedbacks/feedback/update/' + this.feedback.id,
          data: requestBody,
          success: function (data) {
            _self.feedbackData.feedbackComment.comment.message = editableFeedback.message;
            _self.feedbackData.isVisible = data.isVisible;
            if (!editableFeedback.isReply) {
              _self.feedbackData.title = editableFeedback.title;
              _self.feedbackData.feedbackRating.rating.ratingValue = editableFeedback.ratingValue;
            }
            _self.isLoading = false;
          },
          error: function (jqXHR, textStatus, errorThrown) {
            console.error(errorThrown);
            _self.isLoading = false;
          }
        });
      }
      this.editableFeedback = null;
    },
    isFeedbackEditable(id) {
      // we are on the list from the microservice
      const ids = [];
      if (this.showControls === false && this.authenticatedUser.feedbacks) {
        this.authenticatedUser.feedbacks.forEach(feedbackItem => {
          if (feedbackItem.isVisible) {
            ids.push(feedbackItem.id);
          }
        });
      }
      return ids.includes(id);
    },
    canUserEdit() {
      if (!this.feedbackData.sourceRelation[0].feedbackRelationSourceId) {
        return false;
      }
      return this.feedbackData.sourceRelation[0].feedbackRelationType === 'contact' && parseInt(this.feedbackData.sourceRelation[0].feedbackRelationSourceId) === this.authenticatedUser.id;
    }
  }
});

/***/ }),

/***/ "./resources/js/src/app/mixins/loadFeedbackModule.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/app/mixins/loadFeedbackModule.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_FeedbackModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/FeedbackModule */ "./resources/js/src/app/store/FeedbackModule.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  created() {
    if (!this.$store.hasModule('feedback') && !App.isSSR) {
      this.$store.registerModule('feedback', _store_FeedbackModule__WEBPACK_IMPORTED_MODULE_0__["default"], {
        preserveState: !!this.$store.state.feedback
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/src/app/store/FeedbackModule.js":
/*!******************************************************!*\
  !*** ./resources/js/src/app/store/FeedbackModule.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
let loadPaginatedFeedbacksLock = false;
let loadFeedbackUserLock = false;
const state = () => ({
  authenticatedUser: {},
  invisibleFeedbacks: [],
  counts: {},
  feedbacks: [],
  itemAttributes: [],
  pagination: {
    isLastPage: true,
    lastPage: 1,
    currentPage: 1
  }
});
const mutations = {
  setFeedbackAuthenticatedUser(state, authenticatedUser) {
    state.authenticatedUser = authenticatedUser;
    state.invisibleFeedbacks = state.authenticatedUser.feedbacks.filter(item => !item.isVisible);
  },
  setFeedbackCounts(state, counts) {
    state.counts = counts;
  },
  setFeedbackRatingSummary(state, summary) {
    state.counts = _objectSpread(_objectSpread({}, state.counts), summary);
  },
  setFeedbacks(state, feedbacks) {
    state.feedbacks = state.feedbacks.concat(feedbacks);
  },
  setFeedbackItemAttributes(state, attributes) {
    state.itemAttributes = attributes;
  },
  setFeedbackPagination(state, pagination) {
    state.pagination.lastPage = pagination.lastPage;
    state.pagination.isLastPage = pagination.isLastPage;
  },
  incrementCurrentFeedbackPage(state) {
    state.pagination.currentPage++;
  },
  addFeedback(state, feedback) {
    // Add the feedback to the current users feedback list
    state.authenticatedUser.feedbacks.unshift(feedback);
    state.invisibleFeedbacks.unshift(feedback);
    if (feedback.isVisible) {
      const ratingValue = parseInt(feedback.feedbackRating.rating.ratingValue);
      if (ratingValue > 0 && ratingValue <= 5) {
        state.counts['ratingsCountOf' + ratingValue]++;
        state.counts.ratingsCountTotal++;
        recalculateAverage(state);
      }
    }
  },
  deleteFeedback(state, {
    feedbackId,
    parentFeedbackId,
    feedback
  }) {
    // If visible, adjust counts
    if (feedback.isVisible && parentFeedbackId === null) {
      const ratingValue = parseInt(feedback.feedbackRating.rating.ratingValue);
      if (ratingValue > 0 && ratingValue <= 5) {
        state.counts['ratingsCountOf' + ratingValue]--;
        state.counts.ratingsCountTotal--;
        recalculateAverage(state);
      }
    }
    if (parentFeedbackId === null) {
      state.feedbacks = filterFeedbackList(state.feedbacks, feedbackId);
      state.authenticatedUser.feedbacks = filterFeedbackList(state.authenticatedUser.feedbacks, feedbackId);
      state.invisibleFeedbacks = filterFeedbackList(state.invisibleFeedbacks, feedbackId);
    } else {
      state.feedbacks = filterReplyList(state.feedbacks, parentFeedbackId, feedbackId);
      state.authenticatedUser.feedbacks = filterReplyList(state.authenticatedUser.feedbacks, parentFeedbackId, feedbackId);
      state.invisibleFeedbacks = filterReplyList(state.invisibleFeedbacks, parentFeedbackId, feedbackId);
    }
  }
};
const actions = {
  loadFeedbackUser({
    commit
  }, {
    itemId,
    variationId
  }) {
    if (!loadFeedbackUserLock) {
      loadFeedbackUserLock = true;
      let itemString = '';
      if (itemId !== undefined && variationId !== undefined) {
        itemString = `/${itemId}/${variationId}`;
      }
      return $.ajax({
        type: 'GET',
        url: '/rest/feedbacks/user' + itemString,
        success: function (data) {
          commit('setFeedbackAuthenticatedUser', data);
          loadFeedbackUserLock = false;
        },
        error: function (jqXHR, textStatus, errorThrown) {
          loadFeedbackUserLock = false;
          console.error(errorThrown);
        }
      });
    }
  },
  loadFeedbackRatingSummary({
    commit
  }, itemId) {
    return $.ajax({
      type: 'GET',
      url: '/rest/feedbacks/feedback/helper/summary/' + itemId,
      success: function (data) {
        commit('setFeedbackRatingSummary', data);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.error(errorThrown);
      }
    });
  },
  loadPaginatedFeedbacks({
    commit,
    state
  }, {
    itemId,
    feedbacksPerPage,
    language
  }) {
    if (!loadPaginatedFeedbacksLock) {
      loadPaginatedFeedbacksLock = true;
      const request = $.ajax({
        type: 'GET',
        url: '/rest/storefront/feedbacks/feedback/helper/feedbacklist/' + itemId + '/' + state.pagination.currentPage,
        beforeSend: function (xhr) {
          if (language) {
            xhr.setRequestHeader('lang', language);
          }
        },
        data: {
          feedbacksPerPage: feedbacksPerPage
        },
        success: function (data) {
          commit('setFeedbacks', data.feedbacks);
          commit('setFeedbackItemAttributes', data.itemAttributes);
          commit('setFeedbackPagination', data.pagination);
          commit('setFeedbackCounts', data.counts);
          loadPaginatedFeedbacksLock = false;
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.error(errorThrown);
          loadPaginatedFeedbacksLock = false;
        }
      });
      if (language) {
        commit('incrementCurrentFeedbackPage');
      }
      return request;
    }
  },
  deleteFeedback({
    commit,
    state
  }, {
    feedbackId,
    parentFeedbackId,
    feedback
  }) {
    return $.ajax({
      type: 'DELETE',
      url: '/rest/feedbacks/feedback/delete/' + feedbackId,
      success: data => {
        commit('deleteFeedback', {
          feedbackId: feedbackId,
          parentFeedbackId: parentFeedbackId,
          feedback: feedback
        });
      }
    });
  }
};
const getters = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  state,
  mutations,
  actions,
  getters
});

// Utility functions
function filterFeedbackList(feedbackList, feedbackId) {
  return feedbackList.filter(function (feedback) {
    return feedback.id !== feedbackId;
  });
}
function filterReplyList(feedbackList, feedbackId, replyId) {
  return feedbackList.map(function (feedback) {
    if (feedbackId === feedback.id) {
      feedback.replies = feedback.replies.filter(function (reply) {
        return reply.id !== replyId;
      });
    }
    return feedback;
  });
}
function recalculateAverage(state) {
  // Calculate average anew
  let average = 0;
  average += state.counts.ratingsCountOf5 * 5;
  average += state.counts.ratingsCountOf4 * 4;
  average += state.counts.ratingsCountOf3 * 3;
  average += state.counts.ratingsCountOf2 * 2;
  average += state.counts.ratingsCountOf1 * 1;
  average /= state.counts.ratingsCountTotal;
  state.counts.averageValue = average;
}

/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FeedbackContainer_vue_vue_type_template_id_877a4a3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeedbackContainer.vue?vue&type=template&id=877a4a3c& */ "./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=template&id=877a4a3c&");
/* harmony import */ var _FeedbackContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedbackContainer.vue?vue&type=script&lang=js& */ "./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FeedbackContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FeedbackContainer_vue_vue_type_template_id_877a4a3c___WEBPACK_IMPORTED_MODULE_0__.render,
  _FeedbackContainer_vue_vue_type_template_id_877a4a3c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/item/singleitem/FeedbackContainer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackForm.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackForm.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FeedbackForm_vue_vue_type_template_id_1b526f73___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeedbackForm.vue?vue&type=template&id=1b526f73& */ "./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=template&id=1b526f73&");
/* harmony import */ var _FeedbackForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedbackForm.vue?vue&type=script&lang=js& */ "./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FeedbackForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FeedbackForm_vue_vue_type_template_id_1b526f73___WEBPACK_IMPORTED_MODULE_0__.render,
  _FeedbackForm_vue_vue_type_template_id_1b526f73___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/item/singleitem/FeedbackForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackList.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackList.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FeedbackList_vue_vue_type_template_id_4f4b964d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeedbackList.vue?vue&type=template&id=4f4b964d& */ "./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=template&id=4f4b964d&");
/* harmony import */ var _FeedbackList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedbackList.vue?vue&type=script&lang=js& */ "./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FeedbackList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FeedbackList_vue_vue_type_template_id_4f4b964d___WEBPACK_IMPORTED_MODULE_0__.render,
  _FeedbackList_vue_vue_type_template_id_4f4b964d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/item/singleitem/FeedbackList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FeedbackListEntry_vue_vue_type_template_id_05e71156___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeedbackListEntry.vue?vue&type=template&id=05e71156& */ "./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=template&id=05e71156&");
/* harmony import */ var _FeedbackListEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedbackListEntry.vue?vue&type=script&lang=js& */ "./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FeedbackListEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FeedbackListEntry_vue_vue_type_template_id_05e71156___WEBPACK_IMPORTED_MODULE_0__.render,
  _FeedbackListEntry_vue_vue_type_template_id_05e71156___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackContainer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackListEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackListEntry.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackListEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=template&id=877a4a3c&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=template&id=877a4a3c& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackContainer_vue_vue_type_template_id_877a4a3c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackContainer_vue_vue_type_template_id_877a4a3c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackContainer_vue_vue_type_template_id_877a4a3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackContainer.vue?vue&type=template&id=877a4a3c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=template&id=877a4a3c&");


/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=template&id=1b526f73&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=template&id=1b526f73& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackForm_vue_vue_type_template_id_1b526f73___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackForm_vue_vue_type_template_id_1b526f73___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackForm_vue_vue_type_template_id_1b526f73___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackForm.vue?vue&type=template&id=1b526f73& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=template&id=1b526f73&");


/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=template&id=4f4b964d&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=template&id=4f4b964d& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackList_vue_vue_type_template_id_4f4b964d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackList_vue_vue_type_template_id_4f4b964d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackList_vue_vue_type_template_id_4f4b964d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackList.vue?vue&type=template&id=4f4b964d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=template&id=4f4b964d&");


/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=template&id=05e71156&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=template&id=05e71156& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackListEntry_vue_vue_type_template_id_05e71156___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackListEntry_vue_vue_type_template_id_05e71156___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackListEntry_vue_vue_type_template_id_05e71156___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackListEntry.vue?vue&type=template&id=05e71156& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=template&id=05e71156&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=template&id=877a4a3c&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=template&id=877a4a3c& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "feedback-container" },
    [
      _c("div", { staticClass: "title" }, [
        _vm._v(
          "\n    " +
            _vm._s(_vm.$translate("Feedback::Feedback.customerReviews")) +
            "\n    "
        ),
        _c("small", { staticClass: "feedback-average-count" }, [
          _vm._v(" (" + _vm._s(_vm.counts.ratingsCountTotal) + ")")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "feedback-stars-average" }, [
        _c(
          "div",
          { staticClass: "feedback-stars-background clearfix" },
          _vm._l(5, function(index) {
            return _c(
              "div",
              {
                key: "feedback_stars_background" + index,
                staticClass: "feedback-star"
              },
              [_c("i", { staticClass: "fa fa-star" })]
            )
          }),
          0
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "feedback-stars-overlay-wrap",
            style: { width: (_vm.counts.averageValue * 100) / 5 + "%" }
          },
          [
            _c(
              "div",
              { staticClass: "feedback-stars-overlay clearfix" },
              _vm._l(5, function(index) {
                return _c(
                  "div",
                  {
                    key: "feedback_stars_overlay_" + index,
                    staticClass: "feedback-star"
                  },
                  [_c("i", { staticClass: "fa fa-star" })]
                )
              }),
              0
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row my-2", class: _vm.classes, style: _vm.styles },
        [
          _c("div", { staticClass: "col-sm-6" }, [
            _c("div", { staticClass: "feedback-bars" }, [
              _c("div", { staticClass: "feedback-bar-wrap" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "feedback-bar" }, [
                  _c("div", {
                    staticClass: "feedback-bar-fill bg-primary bg-appearance",
                    style: {
                      width:
                        (_vm.counts.ratingsCountOf5 / _vm.counts.highestCount) *
                          100 +
                        "%"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "feedback-bar-text-after" }, [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.counts.ratingsCountOf5) +
                      "\n          "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "feedback-bar-wrap" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "feedback-bar" }, [
                  _c("div", {
                    staticClass: "feedback-bar-fill bg-primary bg-appearance",
                    style: {
                      width:
                        (_vm.counts.ratingsCountOf4 / _vm.counts.highestCount) *
                          100 +
                        "%"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "feedback-bar-text-after" }, [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.counts.ratingsCountOf4) +
                      "\n          "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "feedback-bar-wrap" }, [
                _vm._m(2),
                _vm._v(" "),
                _c("div", { staticClass: "feedback-bar" }, [
                  _c("div", {
                    staticClass: "feedback-bar-fill bg-primary bg-appearance",
                    style: {
                      width:
                        (_vm.counts.ratingsCountOf3 / _vm.counts.highestCount) *
                          100 +
                        "%"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "feedback-bar-text-after" }, [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.counts.ratingsCountOf3) +
                      "\n          "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "feedback-bar-wrap" }, [
                _vm._m(3),
                _vm._v(" "),
                _c("div", { staticClass: "feedback-bar" }, [
                  _c("div", {
                    staticClass: "feedback-bar-fill bg-primary bg-appearance",
                    style: {
                      width:
                        (_vm.counts.ratingsCountOf2 / _vm.counts.highestCount) *
                          100 +
                        "%"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "feedback-bar-text-after" }, [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.counts.ratingsCountOf2) +
                      "\n          "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "feedback-bar-wrap" }, [
                _vm._m(4),
                _vm._v(" "),
                _c("div", { staticClass: "feedback-bar" }, [
                  _c("div", {
                    staticClass: "feedback-bar-fill bg-primary bg-appearance",
                    style: {
                      width:
                        (_vm.counts.ratingsCountOf1 / _vm.counts.highestCount) *
                          100 +
                        "%"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "feedback-bar-text-after" }, [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.counts.ratingsCountOf1) +
                      "\n          "
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-sm-6" },
            [
              !_vm.isLoading
                ? _c("feedback-form", {
                    attrs: {
                      "variation-id": _vm.variationId,
                      options: _vm.optionsForm
                    }
                  })
                : _vm._e()
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("feedback-list", {
        attrs: {
          feedbacks: _vm.invisibleFeedbacks,
          "is-last-page": true,
          "show-controls": true,
          classes: _vm.classes,
          styles: _vm.styles,
          options: _vm.optionsList
        },
        on: {
          delete: function($event) {
            return _vm.showDeleteConfirmation($event)
          }
        }
      }),
      _vm._v(" "),
      _c("feedback-list", {
        attrs: {
          feedbacks: _vm.feedbacks,
          "is-last-page": _vm.pagination.isLastPage,
          "show-controls": false,
          classes: _vm.classes,
          styles: _vm.styles,
          options: _vm.optionsList
        },
        on: {
          "load-more": function($event) {
            return _vm.loadFeedbacks()
          },
          delete: function($event) {
            return _vm.showDeleteConfirmation($event)
          }
        }
      }),
      _vm._v(" "),
      _vm.isLoading
        ? _c("p", { staticClass: "loading-hint" }, [
            _vm._v(
              "\n    " +
                _vm._s(_vm.$translate("Feedback::Feedback.loadingFeedbacks")) +
                "\n  "
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "confirmDeleteModal",
          staticClass: "modal fade",
          attrs: {
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "feedbackConfirmDeleteLabel-" + _vm.variationId
          }
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-header" }, [
                  _c(
                    "span",
                    {
                      staticClass: "modal-title h5",
                      attrs: {
                        id: "feedbackConfirmDeleteLabel-" + _vm.variationId
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.$translate("Feedback::Feedback.deleteConfirm")
                        )
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(5)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  !!_vm.feedbackToDelete && _vm.feedbackToDelete.isReply
                    ? _c("p", { staticClass: "feedback-delete-confirmation" }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(
                              _vm.$translate("Feedback::Feedback.deleteReply")
                            ) +
                            "\n          "
                        )
                      ])
                    : _c("p", { staticClass: "feedback-delete-confirmation" }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(
                              _vm.$translate("Feedback::Feedback.deleteReview")
                            ) +
                            "\n          "
                        )
                      ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary",
                      attrs: { type: "button", "data-dismiss": "modal" }
                    },
                    [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.$translate("Feedback::Feedback.cancel")) +
                          "\n          "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn-appearance",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.deleteFeedback()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n            " +
                          _vm._s(
                            _vm.$translate("Feedback::Feedback.yesDeleteIt")
                          ) +
                          "\n          "
                      )
                    ]
                  )
                ])
              ])
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "feedback-bar-text-before" }, [
      _vm._v("\n            5 "),
      _c("i", { staticClass: "fa fa-star" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "feedback-bar-text-before" }, [
      _vm._v("\n            4 "),
      _c("i", { staticClass: "fa fa-star" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "feedback-bar-text-before" }, [
      _vm._v("\n            3 "),
      _c("i", { staticClass: "fa fa-star" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "feedback-bar-text-before" }, [
      _vm._v("\n            2 "),
      _c("i", { staticClass: "fa fa-star" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "feedback-bar-text-before" }, [
      _vm._v("\n            1 "),
      _c("i", { staticClass: "fa fa-star" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=template&id=1b526f73&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=template&id=1b526f73& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.authenticatedUser.isLoggedIn || _vm.options.allowGuestFeedbacks
      ? _c("div", { staticClass: "createFeedback" }, [
          _c("div", { staticClass: "stars" }, [
            _c(
              "fieldset",
              [
                _c("legend", [
                  _c("span", { staticClass: "visually-hidden" }, [
                    _vm._v(
                      _vm._s(
                        _vm.$translate("Feedback::Feedback.feedbackTextLegend")
                      )
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm._l([5, 4, 3, 2, 1], function(i) {
                  return [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.feedback.ratingValue,
                          expression: "feedback.ratingValue"
                        }
                      ],
                      key: "star_input_" + i,
                      class: "star star-" + i,
                      attrs: {
                        id: "star-" + i + _vm._uid,
                        type: "radio",
                        name: "ratingValue" + _vm._uid
                      },
                      domProps: {
                        value: i,
                        checked: _vm._q(_vm.feedback.ratingValue, i)
                      },
                      on: {
                        change: function($event) {
                          return _vm.$set(_vm.feedback, "ratingValue", i)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        key: "star_label_" + i,
                        class: "star star-" + i,
                        attrs: { for: "star-" + i + _vm._uid }
                      },
                      [
                        _c("span", { staticClass: "visually-hidden" }, [
                          _vm._v(
                            _vm._s(
                              _vm.$translate(
                                "Feedback::Feedback.feedbackAverageLabel",
                                { count: i }
                              )
                            )
                          )
                        ])
                      ]
                    )
                  ]
                })
              ],
              2
            )
          ]),
          _vm._v(" "),
          _vm.ratingMissing
            ? _c("p", { staticClass: "feedback-error alert alert-danger" }, [
                _vm._v(
                  "\n      " +
                    _vm._s(
                      _vm.$translate("Feedback::Feedback.ratingRequired")
                    ) +
                    "\n    "
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          !_vm.authenticatedUser.isLoggedIn && _vm.options.allowGuestFeedbacks
            ? _c("div", { staticClass: "form-group" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.feedback.authorName,
                      expression: "feedback.authorName"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "author",
                    type: "text",
                    name: "author",
                    placeholder: _vm.$translate(
                      "Feedback::Feedback.authorName"
                    ),
                    disabled:
                      _vm.authenticatedUser.limitReached ||
                      !_vm.authenticatedUser.hasPurchased
                  },
                  domProps: { value: _vm.feedback.authorName },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.feedback, "authorName", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "label",
                  {
                    staticClass: "position-absolute",
                    attrs: { for: "author" }
                  },
                  [
                    _c("span", { staticClass: "visually-hidden" }, [
                      _vm._v(
                        _vm._s(_vm.$translate("Feedback::Feedback.authorName"))
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.feedback.honeypot,
                      expression: "feedback.honeypot"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "feedback-textfield",
                    type: "text",
                    name: "feedback-textfield",
                    "aria-hidden": "true",
                    tabindex: "-1"
                  },
                  domProps: { value: _vm.feedback.honeypot },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.feedback, "honeypot", $event.target.value)
                    }
                  }
                }),
                _c(
                  "label",
                  {
                    staticClass: "position-absolute",
                    attrs: { for: "feedback-textfield" }
                  },
                  [
                    _c("span", { staticClass: "visually-hidden" }, [
                      _vm._v(
                        _vm._s(
                          _vm.$translate("Feedback::Feedback.honeypotLabel")
                        )
                      )
                    ])
                  ]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.feedback.title,
                  expression: "feedback.title"
                }
              ],
              staticClass: "form-control",
              class: { "is-invalid": _vm.titleMissing },
              attrs: {
                id: "title",
                type: "text",
                name: "title",
                placeholder: _vm.$translate("Feedback::Feedback.title"),
                disabled:
                  _vm.authenticatedUser.limitReached ||
                  !_vm.authenticatedUser.hasPurchased
              },
              domProps: { value: _vm.feedback.title },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.feedback, "title", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "label",
              { staticClass: "position-absolute", attrs: { for: "title" } },
              [
                _c("span", { staticClass: "visually-hidden" }, [
                  _vm._v(_vm._s(_vm.$translate("Feedback::Feedback.title")))
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "invalid-feedback" }, [
              _vm._v(
                "\n        " +
                  _vm._s(_vm.$translate("Feedback::Feedback.titleRequired")) +
                  "\n      "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.feedback.message,
                  expression: "feedback.message"
                }
              ],
              staticClass: "form-control",
              attrs: {
                id: "message",
                name: "message",
                rows: "3",
                placeholder: _vm.$translate("Feedback::Feedback.reviewMessage"),
                disabled:
                  _vm.authenticatedUser.limitReached ||
                  !_vm.authenticatedUser.hasPurchased
              },
              domProps: { value: _vm.feedback.message },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.feedback, "message", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "label",
              { staticClass: "position-absolute", attrs: { for: "message" } },
              [
                _c("span", { staticClass: "visually-hidden" }, [
                  _vm._v(
                    _vm._s(_vm.$translate("Feedback::Feedback.reviewMessage"))
                  )
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _vm.authenticatedUser.limitReached
            ? _c(
                "div",
                {
                  directives: [{ name: "tooltip", rawName: "v-tooltip" }],
                  staticClass: "feedback-tooltip-wrapper",
                  attrs: {
                    "data-toggle": "tooltip",
                    "data-placement": "top",
                    "data-original-title": _vm.$translate(
                      "Feedback::Feedback.maximumNumberOfFeedbacksReached"
                    )
                  }
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn-appearance",
                      attrs: { disabled: "" }
                    },
                    [
                      _vm._v(
                        "\n        " +
                          _vm._s(
                            _vm.$translate("Feedback::Feedback.submitReview")
                          ) +
                          "\n      "
                      )
                    ]
                  )
                ]
              )
            : !_vm.authenticatedUser.hasPurchased
            ? _c(
                "div",
                {
                  directives: [{ name: "tooltip", rawName: "v-tooltip" }],
                  staticClass: "feedback-tooltip-wrapper",
                  attrs: {
                    "data-toggle": "tooltip",
                    "data-placement": "top",
                    "data-original-title": _vm.$translate(
                      "Feedback::Feedback.errorDoesntOwnProduct"
                    )
                  }
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn-appearance",
                      attrs: { disabled: "" }
                    },
                    [
                      _vm._v(
                        "\n        " +
                          _vm._s(
                            _vm.$translate("Feedback::Feedback.submitReview")
                          ) +
                          "\n      "
                      )
                    ]
                  )
                ]
              )
            : _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-appearance",
                  attrs: { disabled: _vm.isLoading },
                  on: {
                    click: function($event) {
                      return _vm.createFeedback()
                    }
                  }
                },
                [
                  _vm._v(
                    "\n      " +
                      _vm._s(
                        _vm.$translate("Feedback::Feedback.submitReview")
                      ) +
                      "\n    "
                  )
                ]
              )
        ])
      : _c("div", [
          _c("div", { staticClass: "alert alert-info" }, [
            _vm._v(
              "\n      " +
                _vm._s(
                  _vm.$translate("Feedback::Feedback.logInCustomerReviews")
                ) +
                "\n    "
            )
          ]),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "btn btn-primary btn-appearance",
              attrs: { "data-toggle": "modal", href: "#login" },
              on: {
                click: function($event) {
                  return _vm.createLoginModal()
                }
              }
            },
            [
              _c("span", [
                _vm._v(_vm._s(_vm.$translate("Feedback::Feedback.login")))
              ]),
              _vm._v(" "),
              _c("i", {
                staticClass: "fa fa-user",
                attrs: { "aria-hidden": "true" }
              })
            ]
          )
        ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=template&id=4f4b964d&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=template&id=4f4b964d& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "feedback-list" },
    [
      _vm._l(_vm.feedbacks, function(feedback) {
        return _c("feedback-list-entry", {
          key: feedback.id,
          attrs: {
            feedback: feedback,
            "is-reply": false,
            "show-controls": _vm.showControls,
            classes: _vm.classes,
            styles: _vm.styles,
            options: _vm.options
          },
          on: {
            delete: function($event) {
              return _vm.$emit("delete", $event)
            }
          }
        })
      }),
      _vm._v(" "),
      !_vm.isLastPage
        ? _c(
            "a",
            {
              staticClass: "btn btn-default btn-block feedback-loadmore",
              on: {
                click: function($event) {
                  return _vm.onLoadMoreClicked()
                }
              }
            },
            [
              _vm._v(
                "\n    " +
                  _vm._s(_vm.$translate("Feedback::Feedback.loadMore")) +
                  "\n  "
              )
            ]
          )
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=template&id=05e71156&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=template&id=05e71156& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "feedback clearfix", class: { loading: _vm.isLoading } },
    [
      (!_vm.editableFeedback && _vm.showControls) ||
      _vm.isFeedbackEditable(_vm.feedbackData.id) || _vm.canUserEdit()
        ? _c("div", { staticClass: "feedback-options" }, [
            !_vm.feedbackData.isVisible
              ? _c(
                  "span",
                  {
                    directives: [{ name: "tooltip", rawName: "v-tooltip" }],
                    staticClass: "btn-sm btn-danger",
                    attrs: {
                      "data-toggle": "tooltip",
                      "data-placement": "top",
                      "data-original-title": _vm.$translate(
                        "Feedback::Feedback.moderationMessage"
                      )
                    }
                  },
                  [_c("i", { staticClass: "fa fa-eye-slash" })]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.authenticatedUser.isLoggedIn
              ? _c(
                  "span",
                  {
                    directives: [{ name: "tooltip", rawName: "v-tooltip" }],
                    ref: "editButton",
                    staticClass: "btn btn-sm btn-danger",
                    attrs: {
                      "data-toggle": "tooltip",
                      "data-placement": "top",
                      "data-original-title": _vm.isReply
                        ? _vm.$translate("Feedback::Feedback.editReply")
                        : _vm.$translate("Feedback::Feedback.editReview")
                    },
                    on: {
                      click: function($event) {
                        return _vm.editFeedback()
                      }
                    }
                  },
                  [_c("i", { staticClass: "fa fa-pencil" })]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.authenticatedUser.isLoggedIn
              ? _c(
                  "span",
                  {
                    directives: [{ name: "tooltip", rawName: "v-tooltip" }],
                    staticClass: "btn btn-sm btn-danger",
                    attrs: {
                      "data-toggle": "tooltip",
                      "data-placement": "top",
                      "data-original-title": _vm.isReply
                        ? _vm.$translate("Feedback::Feedback.deleteReply")
                        : _vm.$translate("Feedback::Feedback.deleteReview")
                    },
                    on: {
                      click: function($event) {
                        return _vm.showDeleteConfirmation()
                      }
                    }
                  },
                  [_c("i", { staticClass: "fa fa-trash-o" })]
                )
              : _vm._e()
          ])
        : _vm._e(),
      _vm._v(" "),
      !_vm.editableFeedback
        ? _c("feedback-comment", {
            attrs: {
              feedback: _vm.feedbackData,
              "is-reply": _vm.isReply,
              "show-controls": _vm.showControls,
              classes: _vm.classes,
              styles: _vm.styles,
              options: _vm.options
            },
            on: {
              delete: function($event) {
                return _vm.$emit("delete", $event)
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      !!_vm.editableFeedback && _vm.isReply
        ? _c("div", [
            _c("div", { staticClass: "form-group" }, [
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.editableFeedback.message,
                    expression: "editableFeedback.message"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  rows: "3",
                  placeholder: _vm.$translate("Feedback::Feedback.replyMessage")
                },
                domProps: { value: _vm.editableFeedback.message },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.editableFeedback,
                      "message",
                      $event.target.value
                    )
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary btn-appearance",
                on: {
                  click: function($event) {
                    return _vm.saveEditableFeedback()
                  }
                }
              },
              [
                _vm._v(
                  "\n      " +
                    _vm._s(_vm.$translate("Feedback::Feedback.editReply")) +
                    "\n    "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-secondary feedback-edit-cancel",
                on: {
                  click: function($event) {
                    _vm.editableFeedback = null
                  }
                }
              },
              [
                _vm._v(
                  "\n      " +
                    _vm._s(_vm.$translate("Feedback::Feedback.cancel")) +
                    "\n    "
                )
              ]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      !!_vm.editableFeedback && !_vm.isReply
        ? _c("div", [
            _c("div", { staticClass: "stars" }, [
              _c(
                "fieldset",
                [
                  _c("legend", [
                    _c("span", { staticClass: "visually-hidden" }, [
                      _vm._v(
                        _vm._s(
                          _vm.$translate(
                            "Feedback::Feedback.feedbackTextLegend"
                          )
                        )
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._l([5, 4, 3, 2, 1], function(i) {
                    return [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.editableFeedback.ratingValue,
                            expression: "editableFeedback.ratingValue"
                          }
                        ],
                        key: "stars_input_" + i,
                        class: "star star-" + i,
                        attrs: {
                          id: "star-" + _vm._uid + "-" + i,
                          type: "radio",
                          name: "ratingValue"
                        },
                        domProps: {
                          value: i,
                          checked: _vm._q(_vm.editableFeedback.ratingValue, i)
                        },
                        on: {
                          change: function($event) {
                            return _vm.$set(
                              _vm.editableFeedback,
                              "ratingValue",
                              i
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          key: "stars_label_" + i,
                          class: "star star-" + i,
                          attrs: { for: "star-" + _vm._uid + "-" + i }
                        },
                        [
                          _c("span", { staticClass: "visually-hidden" }, [
                            _vm._v(
                              _vm._s(
                                _vm.$translate(
                                  "Feedback::Feedback.feedbackAverageLabel",
                                  { count: i }
                                )
                              )
                            )
                          ])
                        ]
                      )
                    ]
                  })
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.editableFeedback.title,
                    expression: "editableFeedback.title"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  id: "label_title_" + _vm._uid,
                  type: "text",
                  name: "title_" + _vm._uid,
                  placeholder: _vm.$translate("Feedback::Feedback.title"),
                  required: ""
                },
                domProps: { value: _vm.editableFeedback.title },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.editableFeedback, "title", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "label",
                {
                  staticClass: "position-absolute",
                  attrs: { for: "label_title_" + _vm._uid }
                },
                [
                  _c("span", { staticClass: "visually-hidden" }, [
                    _vm._v(_vm._s(_vm.$translate("Feedback::Feedback.title")))
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.editableFeedback.message,
                    expression: "editableFeedback.message"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  id: "label_message_" + _vm._uid,
                  name: "message_" + _vm._uid,
                  rows: "3",
                  placeholder: _vm.$translate("Feedback::Feedback.title")
                },
                domProps: { value: _vm.editableFeedback.message },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.editableFeedback,
                      "message",
                      $event.target.value
                    )
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "label",
                {
                  staticClass: "position-absolute",
                  attrs: { for: "label_message_" + _vm._uid }
                },
                [
                  _c("span", { staticClass: "visually-hidden" }, [
                    _vm._v(_vm._s(_vm.$translate("Feedback::Feedback.title")))
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary btn-appearance",
                on: {
                  click: function($event) {
                    return _vm.saveEditableFeedback()
                  }
                }
              },
              [
                _vm._v(
                  "\n      " +
                    _vm._s(_vm.$translate("Feedback::Feedback.editReview")) +
                    "\n    "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-secondary feedback-edit-cancel",
                on: {
                  click: function($event) {
                    _vm.editableFeedback = null
                  }
                }
              },
              [
                _vm._v(
                  "\n      " +
                    _vm._s(_vm.$translate("Feedback::Feedback.cancel")) +
                    "\n    "
                )
              ]
            )
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=feedback-3.js.map