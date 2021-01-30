
/**
 * 内容转换器
 */
export class Converter {
    /**
     * 将实体的值拷贝到一个简单javascript对象
     * @param entity 实例
     * @param clazz 类
     */
    public static convertPojo<E extends Object, V>(
        entity: E,
        clazz: new () => V
    ): V {
        if (isClass(clazz)) {
            let pojo = new clazz();
            const prototypes = getPrototypes(clazz);
            prototypes.filter((key) => key === 'constructor');
            for (let key of prototypes) {
                const _key = 'get' + firstToUpper(key);
                const fn = getProps(entity, _key);
                if (typeof fn === 'function') {
                    setProps(pojo, key, fn.call(entity));
                }
            }
            return pojo;
        } else {
            throw new Error(`${clazz} not a Class`);
        }
    }

    public static convertEntity<E, V>(entity: E, clazz: new () => V): V {
        // 判断是不是类
        if (isClass(clazz)) {
            //创建实例
            const newEntity = new clazz();
            //获取指定Class中所有可枚举的属性,并过滤枚举属性写入以外的属性
            const reg = /^set/;
            const prototypes = getPrototypes(clazz).filter((key) => reg.test(key));
            //为新建的实例赋值
            for (const setKey of prototypes) {
                const getKey = `get${setKey.slice(3)}`;
                console.log(`getKey:${getKey}`);
                const getFn = getProps(entity, getKey);
                const setFn = getProps(newEntity, setKey);

                if (typeof getFn === 'function' && typeof setFn === 'function') {
                    setFn.call(newEntity, getFn.call(entity));
                }
            }
            return newEntity;
        } else {
            throw new Error(`${clazz} is not a Class`);
        }
    }
}

/**
 * 获取Class的所有可枚举属性
 * @param typeof
 */
function getPrototypes<T>(clazz: new () => T): Array<string> {
    return Object.getOwnPropertyNames(clazz.prototype);
}
/**
 * 判断是否是一个Class
 * @param target
 */
const isClass = function (target: any): boolean {
    return typeof target === 'function' && target.toString().startsWith('class');
};

/**
 * 首字符大写
 * @param str
 */
const firstToUpper = function (str: string) {
    return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
};

/**
 * 获取实例对象的某个属性
 * @param obj
 * @param propName
 */
const getProps: any = <T, K extends keyof T>(obj: T, propName: K) => {
    return obj[propName];
};

/**
 * 设置实例对象的某个属性值
 * @param obj
 * @param propName
 */
const setProps: any = <T, K extends keyof T, V>(
    obj: T,
    propName: K,
    val: any
) => {
    obj[propName] = val;
};