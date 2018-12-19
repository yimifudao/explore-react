## 创建react 组件的4种方式以及区别

1. 通过class 继承 React.Component

```javascript
class DemoComb extends React.Component{
  render(){
    return(
      <div>
        test1
      </div>
    )
  }
}
```

上面的这种方式，比较常见；主要的好处是，通过该方式创建的组件拥有完整是生命周期，stage，可以定义方法，缺点就是，编译出来的代码量会大同时需要自己去做性能的优化也就是需要实现 `shouleComponentUpdate(nextProps, nextState)`

2. 通过 class 继承 React.PureComponent 

```javascript
class DemoComb extends React.PureComponent{
  render(){
    return(
      <div>
        test2
      </div>
    )
  }
}
```
方式2和方式1唯一的区别是，通过这种方式创建的组件，react帮助我们实现了 `shouldComponentUpdate(nextProps, nextState)`，也就是帮助我们做了简单的性能优化，只是它只能对对象进行浅对比

3. 通过纯函数的方式

```javascript
const DemoComb = function(props){
  return (
    <div>
      test3
    </div>
  )
}
```
方式3的优点很明显，代码简单，没有state、生命周期、方法。代码维护性强。当前这也是它的缺点，因为缺少了state，生命周期、方法；所以如果出现扩展的时候就比较困难；时常面临组件改造；而且该组件也没有做性能的优化，props只要发生变化，组件就会`rerender`

4. 通过 `React.momo()` 配合纯函数实现

```javascript
// one
const DemoComb = React.memo(function DemoComb(props){
  return (
    <div>
      test 4
    </div>
  )
})

// two 实现对比函数
function propsCompore(prevProps, nextProps){
  return prevProps.persion.name === nextProps.persion.name
}
const DemoComb = (props)=>{
  return (
    <div>
      {props.persion.name}
    </div>
  )
}
const DemoCombMemo = React.memo(DemoComb,propsCompore)
```
react通过高阶函数的方式实现了对纯组件的增强，对外开放了`props`对比函数