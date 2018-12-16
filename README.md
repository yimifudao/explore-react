# TODO-list

### 以下问题需要解释清楚
1. 如果将一个button 按钮 变成a链接？
2. 在button组件中，设置 loading属性的时候可以支持2种值，当设置为 loading = {delay:3000} 的时候表示的是什么意思？



### 思考

1. 按钮组件是属于基础组件，通过这个基础组件和其他组件进行组合可以创造出多种复合的组件，你能想出来多少？







### 思考-react，
1. 如何将一个组件进行重置
2. 什么是controller模式，什么是非controller模式；2者各自的优劣
3. 在进行事件绑定的时候，以下2种方式如何区别使用

```javascript

// class-properties 需要额外的插件支持
click = ()=>{

}

<button onClick={this.click} />

// es6规范
clickA(){

}
<button onClick={()=>tihs.clickA()} />

```

4. 通过css的display 控制组件频繁的显示或者隐藏，来提高性能，那么如何实现？又该在什么场景下去使用？


### 思考-react使用规范