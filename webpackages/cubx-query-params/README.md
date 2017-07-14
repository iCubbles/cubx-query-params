## cubx-query-params
Contains component(s) to manage url parameters
### Artifacts of the webpackage
| Name | Type | Description | Links |
|---|---|---|---|
| **docs** | Application | Generated webpackage documentation. | [docs](https://cubbles.world/sandbox/cubx-query-params@1.0.0/docs/index.html)  |
| **cubx-query-params** | Elementary Component | Component to manage url params. | [demo](https://cubbles.world/sandbox/cubx-query-params@1.0.0/cubx-query-params/demo/index.html) [docs](https://cubbles.world/sandbox/cubx-query-params@1.0.0/cubx-query-params/docs/index.html)  |
### Use of components
The html file should contain the desire component using its tag, e.g. the `<cubx-query-params>`, as follows:
```html
<cubx-query-params cubx-webpackage-id="cubx-query-params@1.0.0"></cubx-query-params>
```
Note that the `webpackageId` should be provided, which in this case is: `cubx-query-params@1.0.0`.
Additionally, this component can be initialized using the `<cubx-core-slot-init>` tag (available from _cubx.core.rte@1.9.0_).
For example, lets initialize the `newSearchParams` slot to get the basic package of ckeditor:
```html
<cubx-query-params cubx-webpackage-id="cubx-query-params@1.0.0"></cubx-query-params>
	<!--Initilization-->
	<cubx-core-init style="display:none">
		<cubx-core-slot-init slot="newSearchParams">{ "name": "John Doe", "birthDate": "1967-08-02", "id": 1, "hobbies": ["sports", "reading"], "birthPlace": {"country": "Colombia", "city": "Cali"} }</cubx-core-slot-init>
	</cubx-core-init>
</cubx-query-params>
```
Or it can be initialized and later manipulated from Javascript as follows:
```javascript
var component= document.querySelector('cubx-query-params');
// Wait until CIF is ready
document.addEventListener('cifReady', function() {
	// Manipulate slots
	component.setNewSearchParams({ "name": "John Doe", "birthDate": "1967-08-02", "id": 1, "hobbies": ["sports", "reading"], "birthPlace": {"country": "Colombia", "city": "Cali"} });
});
```
[Want to get to know the Cubbles Platform?](https://cubbles.github.io)