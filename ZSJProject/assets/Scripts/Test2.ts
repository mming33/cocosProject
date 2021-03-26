const { ccclass, property } = cc._decorator;

@ccclass
export default class Test2 extends cc.Component {
    //这是一条注释
    //private -- 私有变量 public -- 公有变量  
    //区别就是私有变量只能在类内访问，共有变量可以在类外访问


    //这是一个数值的声明语句  typeScript 没有区分整型和浮点型统一用number来声明
    private a_number: number = 0;
    //这是一个字符串的声明语句
    private a_string: string = "";
    //这是一个布尔参数的声明语句
    private a_bool: boolean = true;
    //这是一个数组的声明语句
    private a_Array: Array<number> = new Array<number>();

    public b_number: number = 0;
    public b_string: string = "";
    public b_bool: boolean = true;
    public b_Array: Array<number> = new Array<number>();

    /**名称为Func1的无返回值的私有函数 */
    private Func1(): void {

    }

    /**名称为Func2的无返回值的共有函数 */
    public Func2(): void {

    }
    /**名称为Func3的无返回值的共有函数 */
    public static Func3(): void {

    }

    /**名称为Func4的无返回值的共有函数 
     * 在调用这个函数的时候需要传入两个参数 -- arg1,arg2
     * 这两个参数必须是数值类型
    */
    public Func4(arg1: number, arg2: number): void {

    }
    /**名称为Func5的返回值是数值型的共有函数 
     * 在调用这个函数的时候需要传入两个参数 -- arg1,arg2
     * 这两个参数必须是数值类型
    */
    public Func5(arg1: number, arg2: number): number {
        //let 是在函数内部声明参数是用到的关键字 
        let sum = 0;
        //sum 的结果是arg1和arg2的和
        sum = arg1 + arg2;
        //返回的关键字
        return sum;
    }

    /**
     * 在调用这个函数的时候需要传入一个参数 -- arg1
     * 这个参数必须是一个数组
     * 这个函数的作用是求传入的数据中所有元素的和
     */
    public Func6(arg1: number[]): number {
        //声明sum
        let sum = 0;

        //循环语句 执行顺序 (1)=>(2)=>(4)=>(3)=>(2)=>(4)=>(3)=>(2)=>(5)
        for (/*(1)*/let i = 0; /*(2)*/i < arg1.length; /*(3)*/i++) {
            /*(4)*/
            //const -- 常数  作用跟let类似，区别是const的值在声明之后不允许修改
            const element = arg1[i];
            //求和
            sum = sum + element;
        }
        /*(5)*/

        //返回的关键字
        return sum;
    }


    /**
     * 这个函数的作用是求传入的数据中出了arg2元素之外的所有元素的和 
     */
    public Func7(arg1: number[], arg2: number): number {
        let sum = 0;
        for (let i = 0; i < arg1.length; i++) {
            const element = arg1[i];
            //判断如果元素element等于arg2就退出"本次"循环
            if (element == arg2) {
                continue;
            }
            sum = sum + element;
        }
        //返回的关键字
        return sum;
    }

    /**
    * 求遇到arg2参数之前的参数的和
    */
    public Func8(arg1: number[], arg2: number): number {
        //var 的作用于let类似
        var sum = 0;
        for (let i = 0; i < arg1.length; i++) {
            const element = arg1[i];
            //判断如果元素element等于arg2就退出循环
            if (element == arg2) {
                break;
            }
            sum = sum + element;
        }
        //返回的关键字
        return sum;
    }




    //关键字 var let const 
    //      break return continue
    //      for
    //      if else 



}
