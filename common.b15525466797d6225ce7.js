(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{pckd:function(e,t,i){"use strict";i.d(t,"a",function(){return s});var r=i("t/Na"),n=i("0np6"),o=i("CcnG"),s=function(){function e(e){this.http=e,this.services=[{id:1,name:"Servicio agua1",description:"Descripcion servicio 1",category:{id:2,name:"category2"}},{id:2,name:"Servicio agua2",description:"Descripcion servicio 1",category:{id:2,name:"category2"}},{id:3,name:"Servicio agua3",description:"Descripcion servicio 1",category:{id:2,name:"category2"}},{id:4,name:"Servicio suelos1",description:"Descripcion servicio 1",category:{id:2,name:"category2"}},{id:5,name:"Servicio suelos2",description:"Descripcion servicio 1",category:{id:2,name:"category2"}},{id:6,name:"Servicio suelos3",description:"Descripcion servicio 1",category:{id:2,name:"category2"}}]}return e.prototype.reqInstruments=function(){var e=n.a+"api/ulr/instruments",t=new r.g({});return this.http.get(e,{headers:t})},e.prototype.reqEquipment=function(){var e=n.a+"equipos",t=new r.g({});return this.http.get(e,{headers:t})},e.prototype.reqInvestigations=function(){var e=n.a+"api/ulr/investigations",t=new r.g({});return this.http.get(e,{headers:t})},e.prototype.reqInvestigationsByMember=function(){var e=n.a+"api/ulr/investigationsbymember",t=new r.g({});return this.http.get(e,{headers:t})},e.prototype.reqLaboratories=function(){var e=n.a+"api/ulr/laboratories",t=new r.g({});return this.http.get(e,{headers:t})},e.prototype.reqServices=function(){var e=n.a+"api/ulr/services",t=new r.g({});return this.http.get(e,{headers:t})},e.prototype.sendInfoQuote=function(e,t){var i=n.a+"api/new/infoQuote",o=new r.g({});return this.http.post(i,{},{headers:o})},e.prototype.sendServiceQuote=function(e,t){var i=n.a+"api/new/infoQuote",o=new r.g({});return this.http.post(i,{},{headers:o})},e.prototype.getServices=function(){return this.services},e.prototype.setServices=function(e){this.services=e},e.ngInjectableDef=o.T({factory:function(){return new e(o.X(r.c))},token:e,providedIn:"root"}),e}()}}]);