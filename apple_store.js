var body = $response.body;
var obj = JSON.parse(body);

if (obj && obj.storefront) {
    let countryCode = obj.storefront.split("-")[0];  // 获取 Apple ID 国家代码
    if (countryCode === "CN") {
        $done({ policy: "DIRECT" });  // 国区 Apple ID 直连
    } else {
        $done({ policy: "PROXY" });   // 其他地区 Apple ID 走代理
    }
} else {
    $done({});  // 无法识别国家时不变更策略
}
