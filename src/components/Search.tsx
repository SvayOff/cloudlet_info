import React from 'react';

const Search: React.FC = () => {
  return (
    <form className="header__form">
      <input type="text" className="header__form-input" placeholder="Search for places..." />
      <button className="header__form-btn">
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <title />
          <g data-name={1}>
            <path d="M221.12 389.43a173.22 173.22 0 0 1-122.87-50.82c-67.75-67.75-67.75-178 0-245.74s178-67.75 245.74 0a173.69 173.69 0 0 1-122.87 296.56Zm0-317.39a143.37 143.37 0 0 0-101.66 42c-56 56.06-56 147.26 0 203.32a143.77 143.77 0 1 0 203.32-203.28A143.35 143.35 0 0 0 221.12 72Z" />
            <path d="M221.12 332.16a116.42 116.42 0 1 1 82.36-34.06 116.1 116.1 0 0 1-82.36 34.06Zm0-202.86a86.44 86.44 0 1 0 61.15 25.29 86.22 86.22 0 0 0-61.15-25.29ZM414.82 450.44a40.78 40.78 0 0 1-29-12l-82.93-82.94a15 15 0 0 1 21.22-21.22L407 417.21a11 11 0 1 0 15.55-15.55l-82.93-82.93a15 15 0 1 1 21.22-21.22l82.93 82.93a41 41 0 0 1-29 70Z" />
          </g>
        </svg>
      </button>
      <span className="header__form-clear">
        <svg
          height={83.368}
          viewBox="0 0 1364 1142"
          width={99.612}
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>{'.fil0{fill:#201e1e}'}</style>
          </defs>
          <g id="Layer_x0020_1">
            <g id="_586686536">
              <ellipse className="fil0" cx={682} cy={938} rx={682} ry={203} />
              <path
                className="fil0"
                d="M1080 224c-52 67-106 134-159 202 45 36 89 72 133 109 63 55 132 105 172 181 26 49-3 103-47 119-8 12-17 24-25 36-26 35-50 70-96 79-1 0-1 1-2 1-88 50-209-88-267-141-32-28-63-55-94-83-70 101-135 205-190 315-13 26-38 42-65 44-64 21-130-18-182-54-50-34-98-72-133-123-44-28-58-92-18-135 9-10 19-21 28-31 2-1 3-2 4-3 85-89 173-175 262-259-80-62-160-126-231-199-40-40-24-103 18-128 55-60 128-98 197-140 49-29 106-5 126 41 30 27 54 58 80 88 4 3 7 5 10 8l64 34-14 18c8 7 17 14 25 22 59-56 118-113 175-171 15-41 65-68 111-47 28 14 56 27 84 42 47 4 88 49 80 99-1 31-19 61-46 76z"
              />
              <path
                d="M1169 746c-34-65-102-115-157-163-59-50-120-99-180-147 69-88 140-177 209-266 13 0 23-15 21-28 6-17-15-35-31-28-31-18-65-34-96-49-13-6-28 7-23 19-76 77-155 152-234 227-33-28-66-57-98-87-1-6-3-11-8-15-2-2-4-3-5-4 0 0-1 0-1-1-6-4-12-9-18-13-30-35-59-73-93-100-1-17-18-33-37-22-62 38-139 77-187 133l-3 6c-13 0-23 19-13 30 87 88 187 163 284 239-108 101-215 203-316 310-1 0-1 1-2 1-9 10-18 19-27 29-16 17-3 39 14 42 31 50 78 88 126 121 33 22 93 63 134 43 8 1 16-1 20-9 67-135 149-261 236-382 49 43 98 87 147 130 14 12 174 181 201 125 4 1 8 1 12 1 25-5 45-36 58-55 14-19 29-40 41-60 17 11 35-12 26-27z"
                style={{
                  fill: '#fefefe',
                }}
              />
            </g>
          </g>
        </svg>
      </span>
    </form>
  );
};

export default Search;
