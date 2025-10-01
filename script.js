// // console.log(123)
// // const btn = document.querySelectorAll(".btn")

// // btn.forEach((btn) => {
// //   btn.addEventListener("click", function () {
// //     if (this.id === "explore-btn") {
// //       return
// //     }
// //     alert("Comming Soon!")
// //   })
// // })

// const products = {
//   sunshine: {
//     title: "Sunshine:",
//     description:
//       "Brighten your day with a feed of positive news and uplifting content. Focus on what truly matters.",
//     image:
//       "images/product1.png",
//   },
//   wave: {
//     title: "Wave:",
//     description:
//       "Dive into trending social conversations and popular posts. Stay connected with what's happening.",
//     image:
//       "images/product2.png",
//   },
//   breeze: {
//     title: "Breeze:",
//     description:
//       "Enjoy a relaxing stream of calming topics and peaceful media. Take a breath and unwind.",
//     image:
//       "images/product3.png",
//   },
// }

// // Get DOM elements
// const cards = document.querySelectorAll(".card")
// const summary = document.getElementById("summaryCard")
// let currentProduct = "sunshine"
// let hoverTimeout

// function updateSummary(productId, isHover = false) {
//   const product = products[productId]

//   summary.classList.add("loading")

//   clearTimeout(hoverTimeout)

//   hoverTimeout = setTimeout(() => {
//     summary.innerHTML = `
//                     <img src="${product.image}" alt="${productId}" class="summary-image">
//                     <div class="summary-content">
//                         <div class="summary-text">
//                             <span class="summary-title">${product.title}</span>
//                             ${product.description}
//                         </div>
//                     </div>
//                 `

//     summary.className = `summary ${productId}-theme`

//     setTimeout(() => {
//       summary.classList.remove("loading")
//     }, 100)

//     if (!isHover) {
//       currentProduct = productId
//     }
//   }, 150)
// }

// cards.forEach((card) => {
//   card.addEventListener("mouseenter", function () {
//     const productId = this.id
//     updateSummary(productId, true) // true indicates this is a hover
//   })

//   card.addEventListener("mouseleave", function () {
//     // Return to the active/current product when hover ends
//     updateSummary(currentProduct, false)
//   })

//   // Keep click functionality for setting active state
//   card.addEventListener("click", function () {
//     // Remove active class from all cards
//     cards.forEach((c) => c.classList.remove("active"))

//     // Add active class to clicked card
//     this.classList.add("active")

//     // Update summary and set as current
//     const productId = this.id
//     updateSummary(productId, false)
//   })
// })
