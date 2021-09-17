## _For personal Study purpose only_
# Main Contain
1. [NestJS Introduction](https://github.com/IT-nhan326/startToLearnNestJS#nestjs)
2. [NestJS Life-Cycle Events](https://github.com/IT-nhan326/startToLearnNestJS/blob/main/README.md#nestjs-life-cycle-events)
3. [Controllers](https://github.com/IT-nhan326/startToLearnNestJS/blob/main/README.md#controllers)
4. []


### [Reference](https://github.com/IT-nhan326/startToLearnNestJS/blob/main/README.md#reference-)


# [NestJS](https://nestjs.com/)
  * NestJS is a Node.js framework for building efficient, reliable and scalable server-side applications.
  * NestJS use progressive JavaScript which is build with and fully supports TypeScript (still enable dev to code in pure JS)
  * Also combine with 
    * OOP (Object Oriented Programming)
    * FP (Function Programming)
    * FRP (Functional Reactive Programming).
  * The Architecture is hightly inspired by [Angular](https://angular.io/)

## [NestJS Life-Cycle Events](https://docs.nestjs.com/fundamentals/lifecycle-events)
![NestJS Lifecyle](https://docs.nestjs.com/assets/lifecycle-events.png)

- Nest provides **Lifecycle hooks** that give visibility into key lifecycle events. and the ability to run (run registered code on `module`, `injectable` or `controller`) when they occur
- Overall lifecycle can be divided into three phases: **initializing**, **running** nad **terminating**
- => Using lifecycle, you can plan :
  * Appropriate initialization of `module` and `service`
  * Manage active **Connection**
  * Shutdown the application when it receives a termination signal



## [Controllers](https://docs.nestjs.com/controllers)
![Controllers](https://docs.nestjs.com/assets/Controllers_1.png)

- Responsible for handling incoming ***Requests*** and returning ***Responses*** to the client
- A controllers purpose is to receive ***SPECIFIC REQUESTS*** for the application
- The [Routing]() mechanism control which `Controller` receive which ***Request***
- Each controller can has more than 1 ***ROUTE***, different ***ROUTE*** can perfome different actions
- Create basic `Controller` by using `classes` and `Decorator`

**Example** : 

![Controllers-code](https://raw.githubusercontent.com/IT-nhan326/startToLearnNestJS/main/Note-IMG/%40Controller-pathDirecting.JPG)

1. **Decorator** : @Controller, @Get ... "@" + name
2. **Route** : 
    - is the argument of `Decorator` ('path') and ('path2')
    - without routing - no argument inside () of `decorator` => Nest will automately direct the path to the main-default path



## [Provider](https://docs.nestjs.com/providers)
![Provider](https://docs.nestjs.com/assets/Components_1.png)

- `Providers` are extra services which you can `Injected` to `Controller` or others `Providers` to provide certain ***FUNCTIONALITIES***
- Can use `Providers` to fetch data from Database then `Controller` can use the services from that and so it keep `Controller` clean and focus



## [Modules]()
- `Module` can import into another `Module` => link all App together
- `Modules` splitted by ***Features*** in the App
- `@Modules` is a `Decorator` that that should be attached to a **CLASS**. Then pass an Object to the `Decorator`

![Decorator-Module](https://raw.githubusercontent.com/IT-nhan326/startToLearnNestJS/main/Note-IMG/%40Module.JPG)


## Reference : 
1. https://nestjs.com
