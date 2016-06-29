"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SchedulerComponent = (function () {
    function SchedulerComponent(el, differs) {
        this.el = el;
        this.aspectRatio = 1.35;
        this.defaultView = 'month';
        this.allDaySlot = true;
        this.slotDuration = '00:30:00';
        this.scrollTime = '06:00:00';
        this.minTime = '00:00:00';
        this.maxTime = '24:00:00';
        this.slotEventOverlap = true;
        this.dragRevertDuration = 500;
        this.dragOpacity = .75;
        this.dragScroll = true;
        this.onDayClick = new core_1.EventEmitter();
        this.onEventClick = new core_1.EventEmitter();
        this.onEventMouseover = new core_1.EventEmitter();
        this.onEventMouseout = new core_1.EventEmitter();
        this.onEventDragStart = new core_1.EventEmitter();
        this.onEventDragStop = new core_1.EventEmitter();
        this.onEventDrop = new core_1.EventEmitter();
        this.onEventResizeStart = new core_1.EventEmitter();
        this.onEventResizeStop = new core_1.EventEmitter();
        this.onEventResize = new core_1.EventEmitter();
        this.onEventAfterRender = new core_1.EventEmitter();
        this.onEventAfterAllRender = new core_1.EventEmitter();
        this.onEventLoading = new core_1.EventEmitter();
        this.differ = differs.find([]).create(null);
        this.initialized = false;
    }
    SchedulerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.schedule = jQuery(this.el.nativeElement.children[0]);
        this.schedule.fullCalendar({
            // events: this.events,
            resources: this.resources,
            resourceAreaWidth: this.resourceAreaWidth,
            resourceLabelText: this.resourceLabelText,
            titleFormat: this.titleFormat,
            slotLabelFormat: this.slotLabelFormat,
            eventBackgroundColor: this.eventBackgroundColor,
            theme: true,
            header: this.header,
            isRTL: this.rtl,
            weekends: this.weekends,
            hiddenDays: this.hiddenDays,
            lang: this.lang,
            fixedWeekCount: this.fixedWeekCount,
            weekNumbers: this.weekNumbers,
            businessHours: this.businessHours,
            height: this.height,
            contentHeight: this.contentHeight,
            aspectRatio: this.aspectRatio,
            eventLimit: this.eventLimit,
            defaultDate: this.defaultDate,
            editable: this.editable,
            eventStartEditable: this.eventStartEditable,
            eventDurationEditable: this.eventDurationEditable,
            defaultView: this.defaultView,
            allDayslot: this.allDaySlot,
            slotDuration: this.slotDuration,
            slotLabelInterval: this.slotLabelInterval,
            snapDuration: this.snapDuration,
            scrollTime: this.scrollTime,
            minTime: this.minTime,
            maxTime: this.maxTime,
            slotEventOverlap: this.slotEventOverlap,
            nowIndicator: this.nowIndicator,
            dragRevertDuration: this.dragRevertDuration,
            dragOpacity: this.dragOpacity,
            dragScroll: this.dragScroll,
            eventOverlap: this.eventOverlap,
            eventConstraint: this.eventConstraint,
            events: function (start, end, timezone, callback) {
                callback(_this.events);
            },
            // resources: (callback) => {
            //     callback(this.resources);
            // },
            dayClick: function (date, jsEvent, view) {
                _this.onDayClick.emit({
                    'date': date,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventClick: function (calEvent, jsEvent, view) {
                _this.onEventClick.emit({
                    'calEvent': calEvent,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventMouseover: function (calEvent, jsEvent, view) {
                _this.onEventMouseover.emit({
                    'calEvent': calEvent,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventMouseout: function (calEvent, jsEvent, view) {
                _this.onEventMouseover.emit({
                    'calEvent': calEvent,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventDragStart: function (event, jsEvent, ui, view) {
                _this.onEventDragStart.emit({
                    'event': event,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventDragStop: function (event, jsEvent, ui, view) {
                _this.onEventDragStop.emit({
                    'event': event,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventDrop: function (event, delta, revertFunc, jsEvent, ui, view) {
                _this.onEventDragStop.emit({
                    'event': event,
                    'delta': delta,
                    'revertFunc': revertFunc,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventResizeStart: function (event, jsEvent, ui, view) {
                _this.onEventResizeStart.emit({
                    'event': event,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventResizeStop: function (event, jsEvent, ui, view) {
                _this.onEventResizeStop.emit({
                    'event': event,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventResize: function (event, delta, revertFunc, jsEvent, ui, view) {
                _this.onEventResize.emit({
                    'event': event,
                    'delta': delta,
                    'revertFunc': revertFunc,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventAfterRender: function (event, element, view) {
                _this.onEventAfterRender.emit({
                    'event': event,
                    'element': element,
                    'view': view
                });
            },
            eventAfterAllRender: function (view) {
                _this.onEventAfterAllRender.emit({
                    'view': view
                });
            },
            loading: function (isLoading, view) {
                _this.onEventLoading.emit({
                    'isLoading': isLoading,
                    'view': view
                });
            },
        });
        this.initialized = true;
    };
    SchedulerComponent.prototype.ngDoCheck = function () {
        var changes = this.differ.diff(this.events);
        if (changes) {
            this.schedule.fullCalendar('refetchEvents');
            this.schedule.fullCalendar('refetchResources');
        }
    };
    SchedulerComponent.prototype.ngOnDestroy = function () {
        jQuery(this.el.nativeElement.children[0]).fullCalendar('destroy');
        this.initialized = false;
        this.schedule = null;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], SchedulerComponent.prototype, "resources", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SchedulerComponent.prototype, "resourceAreaWidth", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SchedulerComponent.prototype, "resourceLabelText", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SchedulerComponent.prototype, "slotLabelFormat", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SchedulerComponent.prototype, "titleFormat", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SchedulerComponent.prototype, "eventBackgroundColor", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], SchedulerComponent.prototype, "events", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SchedulerComponent.prototype, "header", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SchedulerComponent.prototype, "style", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SchedulerComponent.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SchedulerComponent.prototype, "rtl", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SchedulerComponent.prototype, "weekends", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], SchedulerComponent.prototype, "hiddenDays", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SchedulerComponent.prototype, "lang", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SchedulerComponent.prototype, "fixedWeekCount", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SchedulerComponent.prototype, "weekNumbers", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SchedulerComponent.prototype, "businessHours", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SchedulerComponent.prototype, "height", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SchedulerComponent.prototype, "contentHeight", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SchedulerComponent.prototype, "aspectRatio", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SchedulerComponent.prototype, "eventLimit", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SchedulerComponent.prototype, "defaultDate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SchedulerComponent.prototype, "editable", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SchedulerComponent.prototype, "eventStartEditable", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SchedulerComponent.prototype, "eventDurationEditable", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SchedulerComponent.prototype, "defaultView", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SchedulerComponent.prototype, "allDaySlot", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SchedulerComponent.prototype, "slotDuration", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SchedulerComponent.prototype, "slotLabelInterval", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SchedulerComponent.prototype, "snapDuration", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SchedulerComponent.prototype, "scrollTime", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SchedulerComponent.prototype, "minTime", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SchedulerComponent.prototype, "maxTime", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SchedulerComponent.prototype, "slotEventOverlap", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SchedulerComponent.prototype, "nowIndicator", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SchedulerComponent.prototype, "dragRevertDuration", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SchedulerComponent.prototype, "dragOpacity", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SchedulerComponent.prototype, "dragScroll", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SchedulerComponent.prototype, "eventOverlap", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SchedulerComponent.prototype, "eventConstraint", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SchedulerComponent.prototype, "onDayClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SchedulerComponent.prototype, "onEventClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SchedulerComponent.prototype, "onEventMouseover", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SchedulerComponent.prototype, "onEventMouseout", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SchedulerComponent.prototype, "onEventDragStart", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SchedulerComponent.prototype, "onEventDragStop", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SchedulerComponent.prototype, "onEventDrop", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SchedulerComponent.prototype, "onEventResizeStart", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SchedulerComponent.prototype, "onEventResizeStop", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SchedulerComponent.prototype, "onEventResize", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SchedulerComponent.prototype, "onEventAfterRender", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SchedulerComponent.prototype, "onEventAfterAllRender", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SchedulerComponent.prototype, "onEventLoading", void 0);
    SchedulerComponent = __decorate([
        core_1.Component({
            selector: 'ds-scheduler',
            template: '<div [attr.style]="style" [attr.class]="styleClass"></div>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.IterableDiffers])
    ], SchedulerComponent);
    return SchedulerComponent;
}());
exports.SchedulerComponent = SchedulerComponent;

//# sourceMappingURL=scheduler.component.js.map
