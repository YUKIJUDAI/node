const path = require("path");

const infolder = path.join(__dirname, "./ejs")
const outfolder = path.join(__dirname, "./dist")
const baseUrl = "https://yapi.dingdanll.com/api/interface/get?id="
const token = "_hjSessionUser_2894908=eyJpZCI6IjE5ODQ4YWQwLWQwYzMtNWUwYi1iYWYzLWJlNTcwYWJjYjA0NiIsImNyZWF0ZWQiOjE2OTA4NTY4OTY4ODgsImV4aXN0aW5nIjp0cnVlfQ==; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2218a728a0f4fc28-0eeb120cc84e19-11462c6c-2073600-18a728a0f5017b%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22%24device_id%22%3A%2218a728a0f4fc28-0eeb120cc84e19-11462c6c-2073600-18a728a0f5017b%22%7D; _ga=GA1.2.1590552814.1690856895; _ga_M74ZHEQ1M1=GS1.1.1706177763.254.1.1706177772.0.0.0; _yapi_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjM0NywiaWF0IjoxNzA2MjU5MTM2LCJleHAiOjE3MDY4NjM5MzZ9.GClg8H-4VFoJRYCT0JllELfp4YeVTRth5eVOp0Sr9vE; _yapi_uid=347"
const httpList = [
    "53039",
    "53053",
    "53046"
];

module.exports = { infolder, outfolder, baseUrl, token, httpList }