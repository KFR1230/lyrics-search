const MainNav = () => {
  return (
    <nav className="setting_wrapper">
      <div className="setting_text_size">
        <input type="range" className="text-size" />
      </div>
      <div className="setting_night_mode">{/* 圖示 */}</div>
    </nav>
  );
};
export default MainNav;
