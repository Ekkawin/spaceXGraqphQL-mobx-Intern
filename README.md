# spaceXGraqphQL-mobx-Intern

โปรเจคนี้คืออะไร:
โปรคเจคนี้คือโปรเจคที่นำข้อมูลจาก  SpaceX มาแสดง และปรับเปลี่ยนข้อมูลได้

โปรเจคใช้งานอย่างไร:
โปรคเจคจะแสดงข้อมูล เบื้องต้นของการปล่อยจรวดของ SpaceX 

และเมื่อกดปุ่มเข้าไปที่ปุ่ม "Launch Deatil" จะแสดงข้อมูลของการปล่อยจรวดนั้นๆ


จุดประสงค์:
-เพื่อฝึกการใช้ Apollo Graphql
-เพื่อฝึกการใช้ mobx


รายละเอียด:
เมื่อเข้าไปที่หน้าแรก Graphql จะไปดึงข้อมูลบางส่วนจาก  SpaceX api ให้และนำมาแสดง
ข้อมูลจะแสดงอยู่ในกล่อง และเป็นข้อมูลคร่าวๆของการปล่อยจรวดแต่ละอัน
หลังจากนั้นข้อมูลทั้งหมดจะถูกเก็บไว้ใน mobX แล้ว เมื่อ User กดเข้าไปที่ปุ่ม "Launch Detail"
ข้อมูลของการปล่อยจรวดนั้นๆจะถูกดึงมากจาก mobx และแสดงแบบละเอียด
ทั้งนี้ User สามารถเปลี่ยนข้อมูลได้ โดยการพิมพ์เข้าไปได้เลย เพราะกล่องที่แสดง
เป็น Input box และข้อมูลจะถูกส่งกลับไปที่ฝั่ง Server เมื่อ User กด submit

วิธีการดึงข้มูลใช้  axios เพื่อดึงมากจาก spaceX api แต่ใช้ Graphql เพื่อส่งมาให้ฝั่ง
Frontend และใช้ Graphql เพื่อส่งข้อมูลกลับมาให้ฝั่ง server เช่นกัน

นอกเหนือากนี้ ผมได้ทำ  infinite scroll loading เพื่อดึงข้อมูลมาใหม่ เมื่อ
user เลื่อลงมาถึงข้างล่าง ข้อมูลจะถูกดึงมาเพื่ออัตโนมัต
