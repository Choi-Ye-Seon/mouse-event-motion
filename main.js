
// 1. 마우스 방향에 따른 요소 움직임 + 회전 모션

document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".wrapper"); 
  const box = document.querySelector(".js-3dbox");
  const movementFactor = 40; // 회전 강도 (값이 클수록 더 많이 회전)

  //마우스 움직임 이벤트
  wrapper.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e; // 마우스 좌표 실시간 업데이트)
    const centerX = window.innerWidth / 2; // 화면 가로 중앙
    const centerY = window.innerHeight / 2; // 화면 세로 중앙

    // 마우스 위치에 따른 이동 거리 계산
    const rotateY = ((clientX - centerX) / centerX) * movementFactor;
    const rotateX = ((centerY - clientY) / centerY) * movementFactor;

    // GSAP을 사용하여 부드럽게 이동
    gsap.to(box, {
      rotationY: rotateY,
      rotationX: rotateX,
      transformPerspective: 800,
      transformOrigin: "center",
      duration: 0.3,
      ease: "power3.out"
    });
  });

  // 마우스가 영역을 벗어날 때 요소 원위치로 복귀
  wrapper.addEventListener("mouseleave", () => {
    gsap.to(box, {
      rotationY: 0,
      rotationX: 0,
      duration: 0.3,
      ease: "power3.out"
    });
  });
});


// 2. 마우스 방향에 따른 요소 움직임

// document.addEventListener("DOMContentLoaded", () => {
//     const wrapper = document.querySelector(".wrapper");
//     const box = document.querySelector(".js-3dbox");
//     const movementFactor = 60; // 이동 강도 설정 (값이 클수록 더 많이 움직임)

//     wrapper.addEventListener("mousemove", (e) => {
//       const { clientX, clientY } = e;
//       const centerX = window.innerWidth / 2;
//       const centerY = window.innerHeight / 2;

//       const deltaX = ((clientX - centerX) / centerX) * movementFactor;
//       const deltaY = ((clientY - centerY) / centerY) * movementFactor;

//       gsap.to(box, {
//         x: deltaX,
//         y: deltaY,
//         duration: 0.3,
//         ease: "power3.out"
//       });
//     });

//     wrapper.addEventListener("mouseleave", () => {
//       gsap.to(box, {
//         x: 0,
//         y: 0,
//         duration: 0.3,
//         ease: "power3.out"
//       });
//     });
//   });



