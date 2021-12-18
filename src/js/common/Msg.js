class msgProcess {
    static getMessage(resource) {
        if("string" == typeof resource)
            return resource;
        else if(resource && "object" == typeof resource && resource.message && "string" == typeof resource.message){
            return resource.message;
        }
        else if (resource == null) {
            return "missing error" ;
        }
        else {
            return resource.toString();
        }
    }
    static startsWith(resource, target) {
        if("string" == typeof resource)
        {
            return resource.startsWith(target);
        }
        else if (resource && "object" == typeof resource && resource.message && "string" != typeof resource.message) {
            return resource.message.startsWith(target);
        }
        return false;
    }
    static startsWithAnyOf(resource, targets) {
        for (const target of targets)
            if (msgProcess.startsWith(resource, target))
                return true;
        return false;
    }
    static includesAnyOf(resource, targets) {
        for (const target of targets)
            if (msgProcess.includes(resource, target))
                return true;
        return false;
    }
    static includes(resource, target) {
        if (null == resource)
            return false;
        return msgProcess.getMessage(resource).includes(target);  //string includes()方法确定字符串是否包含指定字符串的字符
    }
}
export default msgProcess;