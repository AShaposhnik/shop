# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.5] - 2021-06-28
### Added
- Task 5. Routing
- Route '/products-list ' to 'ProductListComponent'
- Route '/product/:productID' to 'ProductViewComponent'
- Route '/cart' to 'CartListComponent'
- Route '/order' to ProcessOrderComponent. + CanLoad/CanActivate Guard (IsCartEmptyGuard)
- Admin Panel with ability of editing and adding products + CanLoad/CanActivate Guard (HasRoleAdminGuard)
- Route /admin/product/edit/:productID + resolve guard + CanDeactivate Guard
- saving cart state in localStorage

## [0.0.4] - 2021-06-12
### Added
- Task 4. Pipes
- uppercase pipe added to category name at a product and cart-item components
- currency pipe added to price at a product and cart-item components
- async pipe applied to the product list at product-list component
- orderBy pipe created and applied to the cart items list at cart-list component

## [0.0.3] - 2021-06-05
### Added
- Task 3. Services and DI
- ConfigOptionsService injected to the FirstComponent
- ConstantsService injected to the FirstComponent
- generatedString injected to the FirstComponent with useFactory GeneratorFactory GeneratorService as a dependency
- getNewId method added to the GeneratorService
- LocalStorageService injected to the FirstComponent
- RandomTextColor directive has been added

## [0.0.2] - 2021-05-30
### Added
- Task 2. Components
- Modules for features (cart, orders, products, shared)
- Disable 'Add to cart' button if product is not available
- Show total sum and quantity of products in cart
- cart-item component
- Ability to change product quantity in cart
- Dynamic title in app component
- Highlight directive

## [0.0.1] - 2021-05-17
### Added
- Task 1. Introduction.
- Implemented all the tasks according to the instructions
- Add additional functionality: removing product from cart

### Changed

### Removed
