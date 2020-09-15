import React from "react";
import Admin from "react-crud-admin";
import Form from "react-jsonschema-form";
import "react-crud-admin/css"; //optional css import

export default class Example extends Admin {
  constructor() {
    super();
    this.name = "Tenant";
    this.name_plural = "Tenants";
    this.list_display_links = ["name"];
    this.list_display = ["code","name", "emailId", "districtName"];
  }
  get_queryset(page_number, list_per_page, queryset) {
    return [

        
      {
        code: "pb.abohar",
        name: "Abohar",
        
        emailId: "eomcabh@yahoo.in",
        districtName: "Fazilka"
        
        },
      {
        code: "pb.adampur",
        name: "Adampur",

        emailId: "mcadampur38@gmail.com",
        districtName: "Jalandhar"
        },
        
      {
        code: "pb.zirakpur",
        name: "Zirakpur",
       
        emailId: "eomczirakpur@yahoo.in",
        districtName: "Mohali"
        
        }
];
  }
  get_form(object = null) {
    let schema = {
        "$schema": "http://json-schema.org/schema#",
        type: "object",
        properties: {
          tenantId: {
            type: "string"
          },
          moduleName: {
            type: "string"
          },
          tenants: {
            type: "array",
             items: {
               type: "object",
               properties: {
                code: {
                    type: "string"
                },
                name: {
                    type: "string"
                },
                description: {
                    type: "string"
                },
                logoId: {
                  type: "string"
                },
                imageId: {
                  type: "null"
                },
                domainUrl: {
                  type: "string"
                },
                type: {
                  type: "string"
                },
                "twitterUrl": {
                  type: "null"
                },
                "facebookUrl": {
                  type: "null"
                },
                emailId: {
                  type: "string"
                },
                "OfficeTimings": {
                  type: "object",
                  "properties": {
                    "Mon - Fri": {
                      type: "string"
                    }
                  },
                  "required": [
                    "Mon - Fri"
                  ]
                },
                "city": {
                  type: "object",
                  "properties": {
                    name: {
                      type: "string"
                    },
                    localName: {
                      type: "string"
                    },
                    "districtCode": {
                      type: "string"
                    },
                    districtName: {
                      type: "string"
                    },
                    "districtTenantCode": {
                      type: "string"
                    },
                    "regionName": {
                      type: "string"
                    },
                    "ulbGrade": {
                      type: "string"
                    },
                    "longitude": {
                      type: "number"
                    },
                    "latitude": {
                      type: "number"
                    },
                    "shapeFileLocation": {
                      type: "null"
                    },
                    "captcha": {
                      type: "null"
                    },
                    code: {
                      type: "string"
                    },
                    "regionCode": {
                      type: "string"
                    },
                    "municipalityName": {
                      type: "string"
                    },
                    "ddrName": {
                      type: "string"
                    }
                  },
                  "required": [
                    "captcha",
                    "code",
                    "ddrName",
                    "districtCode",
                    "districtName",
                    "districtTenantCode",
                    "latitude",
                    "localName",
                    "longitude",
                    "municipalityName",
                    "name",
                    "regionCode",
                    "regionName",
                    
                    "ulbGrade"
                  ]
                },
                "address": {
                  type: "string"
                },
                "contactNumber": {
                  type: "string"
                }
              },
              "required": [
                "OfficeTimings",
                "address",
                "city",
                "code",
                "contactNumber",
                "description",
                "domainUrl",
                "emailId",
               
                
                "logoId",
                "name",
                
                "type"
              ]
            }
          }
        },
        "required": [
          "moduleName",
          "tenantId",
          "tenants"
        ]
      };

    if (!object) {
      return <Form schema={schema} />;
    } else {
      return <Form schema={schema} formData={object} />;
    }
  }
}