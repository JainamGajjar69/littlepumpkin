"use client";
import { useEffect } from 'react';

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import Image from "next/image";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";

export default function ShoppingCartModal() {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart();

  async function handleCheckoutClick(event: any) {
    event.preventDefault();
  
    // Start the checkout process
    const checkoutProcess = redirectToCheckout();
  
    // Clear the cart
    Object.keys(cartDetails).forEach((itemId) => {
      removeItem(itemId);
    });
  
    try {
      const result = await checkoutProcess;
      if (result?.error) {
        console.log("result");
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  
  async function handleCryptoClick(event: any) {
    event.preventDefault();
  
    // Remove all items from the cart
    Object.keys( cartDetails ).forEach((itemId) => {
      removeItem(itemId);
    });
  
    window.open('/crypto');
  }
  
  async function handleRazorPayClick(event: any) {
    event.preventDefault();
  
    // Start the checkout process
    const checkoutProcess = redirectToCheckout();
  
    // Clear the cart
    Object.keys( cartDetails ).forEach((itemId) => {
      removeItem(itemId);
    });
  
    try {
      const result = await checkoutProcess;
      if (result?.error) {
        console.log("result");
      }
    } catch (error) {
      console.log(error);
    }
  }
  

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                <div className="flex h-full flex-col items-center justify-center space-y-1">
                  <div
                    aria-hidden="true"
                    className="relative mb-4 h-60 w-60 text-muted-foreground"
                  >
                    <div className="pt-20">
                      <Image
                        src="/emptycart.png"
                        width={500}
                        height={500}
                        alt="sus"
                      />
                    </div>
                    <h1 className="py-4 pl-4 justify-center">
                      You dont have any items
                    </h1>
                  </div>
                </div>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li key={entry.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={entry.image as string}
                          alt="Product image"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{entry.name}</h3>
                            <p className="ml-4">₹{entry.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                            {entry.description}
                          </p>
                        </div>

                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">QTY: {entry.quantity}</p>

                          <div className="flex">
                            <button
                              type="button"
                              onClick={() => removeItem(entry.id)}
                              className="font-medium text-primary hover:text-primary/80"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal:</p>
              <p>₹{totalPrice}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes are calculated at checkout.
            </p>

            <div className="mt-6">
              <Button
                onClick={handleCheckoutClick}
                className="w-full hover:scale-105 duration-200"
              >
                Checkout
              </Button>
            </div>

            <div className="mt-6">
            
              <Button
                onClick={handleCryptoClick}
                className="w-full hover:scale-105 duration-200"
              >
                Pay with Crypto
              </Button>
            
            </div>
            <div className="mt-6">
              <Button
                onClick={handleCheckoutClick}
                className="w-full hover:scale-105 duration-200"
              >
                Pay with RazorPay
              </Button>
            </div>

            <div className="mt-6 flex justify-center text-center text-sm text-gray-500 hover:scale-105 duration-200">
              <p>
                OR{" "}
                <button
                  onClick={() => handleCartClick()}
                  className=" font-medium text-primary hover:text-primary/80 "
                >
                  Continue Shopping
                </button>
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}


// "use client";
// import { useEffect } from 'react';

// import { Button } from "@/components/ui/button";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
// } from "@/components/ui/sheet";

// import Image from "next/image";
// import Link from "next/link";
// import { useShoppingCart } from "use-shopping-cart";

// export default function ShoppingCartModal() {
//   const {
//     cartCount,
//     shouldDisplayCart,
//     handleCartClick,
//     cartDetails,
//     removeItem,
//     totalPrice,
//     redirectToCheckout,
//   } = useShoppingCart();

//   function handleReturnFromCheckout() {
//     // Remove all items from the cart
//     Object.keys(cartDetails).forEach((itemId) => {
//       removeItem(itemId);
//     });
//   }
  
//   async function handleCheckoutClick(event: any) {
//     event.preventDefault();
//     try {
//       const result = await redirectToCheckout();
//       if (result?.error) {
//         console.log("result");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }
// async function handleCryptoClick(event: any) {
//   event.preventDefault();

//   // Remove all items from the cart
//   Object.keys(cartDetails).forEach((itemId) => {
//     removeItem(itemId);
//   });

//   window.open('/crypto');
// }

//   return (
//     <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
//       <SheetContent className="sm:max-w-lg w-[90vw]">
//         <SheetHeader>
//           <SheetTitle>Shopping Cart</SheetTitle>
//         </SheetHeader>

//         <div className="h-full flex flex-col justify-between">
//           <div className="mt-8 flex-1 overflow-y-auto">
//             <ul className="-my-6 divide-y divide-gray-200">
//               {cartCount === 0 ? (
//                 <div className="flex h-full flex-col items-center justify-center space-y-1">
//                   <div
//                     aria-hidden="true"
//                     className="relative mb-4 h-60 w-60 text-muted-foreground"
//                   >
//                     <div className="pt-20">
//                       <Image
//                         src="/emptycart.png"
//                         width={500}
//                         height={500}
//                         alt="sus"
//                       />
//                     </div>
//                     <h1 className="py-4 pl-4 justify-center">
//                       You dont have any items
//                     </h1>
//                   </div>
//                 </div>
//               ) : (
//                 <>
//                   {Object.values(cartDetails ?? {}).map((entry) => (
//                     <li key={entry.id} className="flex py-6">
//                       <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
//                         <Image
//                           src={entry.image as string}
//                           alt="Product image"
//                           width={100}
//                           height={100}
//                         />
//                       </div>

//                       <div className="ml-4 flex flex-1 flex-col">
//                         <div>
//                           <div className="flex justify-between text-base font-medium text-gray-900">
//                             <h3>{entry.name}</h3>
//                             <p className="ml-4">₹{entry.price}</p>
//                           </div>
//                           <p className="mt-1 text-sm text-gray-500 line-clamp-2">
//                             {entry.description}
//                           </p>
//                         </div>

//                         <div className="flex flex-1 items-end justify-between text-sm">
//                           <p className="text-gray-500">QTY: {entry.quantity}</p>

//                           <div className="flex">
//                             <button
//                               type="button"
//                               onClick={() => removeItem(entry.id)}
//                               className="font-medium text-primary hover:text-primary/80"
//                             >
//                               Remove
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </li>
//                   ))}
//                 </>
//               )}
//             </ul>
//           </div>

//           <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
//             <div className="flex justify-between text-base font-medium text-gray-900">
//               <p>Subtotal:</p>
//               <p>₹{totalPrice}</p>
//             </div>
//             <p className="mt-0.5 text-sm text-gray-500">
//               Shipping and taxes are calculated at checkout.
//             </p>

//             <div className="mt-6">
//               <Button
//                 onClick={handleCheckoutClick}
//                 className="w-full hover:scale-105 duration-200"
//               >
//                 Checkout
//               </Button>
//             </div>

//             <div className="mt-6">
            
//               <Button
//                 onClick={handleCryptoClick}
//                 className="w-full hover:scale-105 duration-200"
//               >
//                 Pay with Crypto
//               </Button>
            
//             </div>
//             <div className="mt-6">
//               <Button
//                 onClick={handleCheckoutClick}
//                 className="w-full hover:scale-105 duration-200"
//               >
//                 Pay with RazorPay
//               </Button>
//             </div>

//             <div className="mt-6 flex justify-center text-center text-sm text-gray-500 hover:scale-105 duration-200">
//               <p>
//                 OR{" "}
//                 <button
//                   onClick={() => handleCartClick()}
//                   className=" font-medium text-primary hover:text-primary/80 "
//                 >
//                   Continue Shopping
//                 </button>
//               </p>
//             </div>
//           </div>
//         </div>
//       </SheetContent>
//     </Sheet>
//   );
// }


