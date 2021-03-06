## _For personal Study purpose only_
# Main Contain
1. [NestJS Introduction](https://github.com/IT-nhan326/startToLearnNestJS#nestjs)
2. [NestJS Life-Cycle Events](https://github.com/IT-nhan326/startToLearnNestJS/blob/main/README.md#nestjs-life-cycle-events)(Unfinished)
3. [Controllers-Route-Decorators](https://github.com/IT-nhan326/startToLearnNestJS/blob/main/README.md#controllers)
4. [Provider-Service](https://github.com/IT-nhan326/startToLearnNestJS/blob/main/README.md#provider)
5. [Middleware](https://docs.nestjs.com/middleware)
6. [Exception-filters](https://docs.nestjs.com/exception-filters)
7. [Pipe](https://github.com/IT-nhan326/startToLearnNestJS/blob/main/README.md#pipes)
   - [CustomPipe](https://docs.nestjs.com/pipes#custom-pipes)

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
### 1. Lifecycle Sequence : 

![NestJS Lifecyle](https://docs.nestjs.com/assets/lifecycle-events.png--)

- Nest provides **Lifecycle hooks** that give visibility into key lifecycle events. and the ability to run (run registered code on `module`, `injectable` or `controller`) when they occur
- Overall lifecycle can be divided into three phases: **initializing**, **running** nad **terminating**
- => Using lifecycle, you can plan :
  * Appropriate initialization of `module` and `service`
  * Manage active **Connection**
  * Shutdown the application when it receives a termination signal

### 2. Lifecycle Events : 

![LifecycleEvents](https://raw.githubusercontent.com/IT-nhan326/startToLearnNestJS/main/Note-IMG/LifecycleEvents.JPG--)

1. Nest calls registered "lifecycle hook methods" on `modules`, `injectable` and `controllers`

_________________________________________________________________________________________________


## [Controllers](https://docs.nestjs.com/controllers)
![Controllers](https://docs.nestjs.com/assets/Controllers_1.png--)

- Responsible for handling incoming ***Requests*** and returning ***Responses*** to the client
- A controllers purpose is to receive ***SPECIFIC REQUESTS*** for the application
- The [Routing]() mechanism control which `Controller` receive which ***Request***
- Each controller can has more than 1 ***ROUTE***, different ***ROUTE*** can perfome different actions
- Create basic `Controller` by using `classes` and `Decorator`

**Example** : 

![Controllers-code](https://raw.githubusercontent.com/IT-nhan326/startToLearnNestJS/main/Note-IMG/%40Controller-pathDirecting.JPG--)

### 1. **Route** : 
   - is the argument of `Decorator` ('path') and ('path2')
   - without "Routing" - "no argument inside ()" of `decorator` => Nest will automatically direct the path to "your-domain.com/"
   - => @Get will be triggered when client access the "your-domain.com/path/path2" as in Nest "Routing" will follow from "your-domain.com/" to @Controller("path") to @Get("path2")
   - => Callout to getHello() to execute getHello() method inside `service`(appService.getHello())

### 2. **Decorator** : @Controller, @Get ... "@" + name
   - @Reg() or @Request() : Request object. Handlers often need access to the client **REQUEST** details (inject it)
   - @Get() : Fetch resources
   - @Post() : create new records
   - @Put(), @Delete(), @Patch(), @Option(), @All() : Nest provides `decorators` for all standard HTTPs methods
   - @Header() : to specify a custom response header
   - @Redirect(`url`,`statusCode`)
   - @Param() : Route with static paths won't work when you need to accept **DYNAMIC DATA** as part of request(`e.g: GET/items/1` to get item with id = 1) => access with @Param
   - @Body() : 



## [Provider](https://docs.nestjs.com/providers)
![Provider](https://docs.nestjs.com/assets/Components_1.png--)

- `Providers` are extra services which you can `Injected` to `Controller` or others `Providers` to provide certain ***FUNCTIONALITIES***
- Can use `Providers` to fetch data from Database then `Controller` can use the services from that and so it keep `Controller` clean and focus

### 1. Service : 
- `Services` responsible for data storage and retrieval, and is designed to be used by `Controllers`
- Use `@Injectable()` decorator, which declares that `Services` is a class that can be managed by Nest IoC (Inversion of Control) container

### 2. Dependency Injection : 
- Dependencies are services or object that a class needs to perfome its function.
- Dependency Injection(DI) is a design pattern in which a class requests dependencies from external sources rather than creating them
- `@Injectable()` decorator specifies that Nest can use this class in the DI system.
- `@Optional()` - Optional providers : when your class depend on "configuration object", but if none is passes, the default values should be used => optional dependency would helps not leading to errors.
- `@Inject` - Property-based injection : If your top-level class depends on either one or multiple providers, passing them to the top-level class by calling `super()` in sub-classes is not recommended => use `@Inject`






## [Modules](https://docs.nestjs.com/modules)
![Modules-tree](https://docs.nestjs.com/assets/Modules_1.png--)

- `Module` can import into another `Module` => link all App together
- `Modules` splitted by ***Features*** in the App
- `@Modules` is a `Decorator` that that should be attached to a **CLASS**. Then pass an Object to the `Decorator`

![Decorator-Module](https://raw.githubusercontent.com/IT-nhan326/startToLearnNestJS/main/Note-IMG/%40Module.JPG)



## [Pipes](https://docs.nestjs.com/pipes)
![Pipes-Flow](https://docs.nestjs.com/assets/Pipe_1.png--)
- A pipe is a class annotated with the `@Injectable()` decorator. Pipes should implement the `PipeTransform` interface.
- Pipes have two typical use cases :
 1. **Tranformation** :  transform input data to the desired form (e.g., from string to integer)
 2. **Validation** : evaluate input data and if valid, simply pass it through unchanged; otherwise, throw an exception when the data is incorrect
- In both cases, `pipes` **"operate on the arguments"** being processed by a **"controller route handler"**.
- Nest interposes a pipe just before a method is invoked, and **"the pipe" - "receives the arguments destined for the method and operates on them"**
- Any transformation or validation operation takes place at that time, and the route handler is invoked with any (potentially) transformed arguments.

### 1. Build-in Pipes (exported from `@nestjs/common`)
- `ValidationPipe`
- `ParseIntPipe`, `ParseFloatPipe`, `ParseBoolPipe`, `ParseArrayPipe`, `ParseEnumPipe`
- `ParseUUIDPipe`
- `DefaultValuePepe`

### 2. Binding Pipes
- To use a pipe, we need to bind an instance of the pipe class to the appropriate context.
- Example : We want to associate the `pipe` with a particular route handler method, and make sure it runs before the method is called (binding pipe at method param level)

![BindingPipe-@Param-Example](https://github.com/IT-nhan326/startToLearnNestJS/blob/main/Note-IMG/Pipe-%40Param-example.JPG)
![BindingPipe-@Query-Example](https://github.com/IT-nhan326/startToLearnNestJS/blob/main/Note-IMG/Pipe-%40Query-example.JPG)

=> This ensure one of the follwing two conditions is true (either or) : 
   1. The param we receive in the `findOne()` method is a number
   2. Or an exception is thrown before the route handler is called (the exception will prevent the body of `findOne()` method from executiong)

*** We can pass an "in-place instance. Passing an "inplace-instance" is useful if we want to customize the build-in pipe's behavior : 

![in-place instance Pipe](https://github.com/IT-nhan326/startToLearnNestJS/blob/main/Note-IMG/in-place%20instance%20Pipe.JPG)


## Reference : 
1. https://nestjs.com
