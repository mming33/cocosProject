System.register(["cce.code-quality.cr", "cc", "../../../Common/Game/MyComponent.js", "./Floor.js", "./FloorType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, instantiate, Node, Prefab, Vec3, _decorator, MyComponent, Floor, FloorType, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _temp, _crd, ccclass, property, FloorManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMyComponent(extras) {
    _reporterNs.report("MyComponent", "../../../Common/Game/MyComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFloor(extras) {
    _reporterNs.report("Floor", "./Floor", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFloorType(extras) {
    _reporterNs.report("FloorType", "./FloorType", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _class3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cceCodeQualityCr) {
      _reporterNs = _cceCodeQualityCr;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_CommonGameMyComponentJs) {
      MyComponent = _CommonGameMyComponentJs.MyComponent;
    }, function (_FloorJs) {
      Floor = _FloorJs.Floor;
    }, function (_FloorTypeJs) {
      FloorType = _FloorTypeJs.FloorType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "05d54UF3sRLvYPRcXaYLvPz", "FloorMananger", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("FloorManager", FloorManager = (_dec = ccclass('FloorManager'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_ref) {
        _inheritsLoose(FloorManager, _ref);

        function FloorManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _ref.call.apply(_ref, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "floorPrefabs", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "Camera", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "Player", _descriptor3, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "allFloors", []);

          _defineProperty(_assertThisInitialized(_this), "type", "level");

          _defineProperty(_assertThisInitialized(_this), "randomIndex", 0);

          _defineProperty(_assertThisInitialized(_this), "lastNode", null);

          _defineProperty(_assertThisInitialized(_this), "lastFloorType", (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
            error: Error()
          }), FloorType) : FloorType).FRONT);

          _defineProperty(_assertThisInitialized(_this), "frontNumber", 0);

          _defineProperty(_assertThisInitialized(_this), "movespeed", 5);

          _defineProperty(_assertThisInitialized(_this), "moveSpeedx", 0);

          _defineProperty(_assertThisInitialized(_this), "moveSpeedz", 0);

          _defineProperty(_assertThisInitialized(_this), "nowFloorIndex", 0);

          _defineProperty(_assertThisInitialized(_this), "cameraAngle", 0);

          return _this;
        }

        var _proto = FloorManager.prototype;

        _proto.onLoad = function onLoad() {
          FloorManager.I = this.node.getComponent(FloorManager);
        };

        _proto.Init = function Init() {// this.CreateFloorForJson(this.data);
        };

        _proto.CreateFloor = function CreateFloor(FloorID) {
          for (var i = 0; i < this.floorPrefabs.length; i++) {
            var element = this.floorPrefabs[i].data.getComponent(_crd && Floor === void 0 ? (_reportPossibleCrUseOfFloor({
              error: Error()
            }), Floor) : Floor);

            if (element.ID == FloorID) {
              var floor = instantiate(this.floorPrefabs[i]);
              this.allFloors.push(floor.getComponent(_crd && Floor === void 0 ? (_reportPossibleCrUseOfFloor({
                error: Error()
              }), Floor) : Floor));
              return floor;
            }
          }

          console.error("创建地板失败,不存在ID为:", FloorID, "的地板,请检查后重试!");
          return null;
        };

        _proto.CreateFloorForJson = function CreateFloorForJson(json) {
          // json = this.data;
          var node = this.node;

          for (var i = 0; i < json.floorData.length; i++) {
            var element = json.floorData[i];
            var id = Number(element) + 10000;
            var floorNode = this.CreateFloor(id);

            if (floorNode) {
              var type = this.SetNewFloorTypeData(floorNode, json, i);

              if (i == 0) {
                floorNode.setWorldPosition(0, 0, 0);
                this.lastNode = floorNode;
              } else {
                this.SetFloorNodePosition(type, floorNode);
              }

              node.addChild(floorNode);
            }
          }
        };

        _proto.CreateFloorForRandom = function CreateFloorForRandom() {
          // json = this.data;
          var node = this.node;
          var floorNode;
          var floor = {
            floorType: (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).FRONT
          };

          if (this.randomIndex <= 5) {
            var id = Number(1) + 10000;
            floorNode = this.CreateFloor(id);
            floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).FRONT;
          } else {
            var _id = Number(1) + 10000;

            floorNode = this.CreateFloor(_id);

            if (this.lastFloorType == (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).FRONT) {
              if (this.frontNumber >= 5 && Math.random() < 0.2) {
                this.frontNumber = 0;
                if (Math.random() < 0.5) floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).LEFT;else floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).RIGHT;
              } else {
                this.frontNumber++;
                floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).FRONT;
              }
            } else if (this.lastFloorType == (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).LEFT || this.lastFloorType == (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).RIGHT) {
              if (this.frontNumber >= 5 && Math.random() < 0.2) {
                this.frontNumber = 0;
                floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).FRONT;
              } else {
                this.frontNumber++;
                floor.floorType = this.lastFloorType;
              }
            }
          }

          if (floorNode) {
            var f = floorNode.getComponent(_crd && Floor === void 0 ? (_reportPossibleCrUseOfFloor({
              error: Error()
            }), Floor) : Floor);
            f.floorType = floor.floorType;
            this.lastFloorType = floor.floorType;

            if (this.randomIndex == 0) {
              floorNode.setWorldPosition(0, 0, 0);
              this.lastNode = floorNode;
            } else {
              this.SetFloorNodePosition(floor.floorType, floorNode);
            }

            node.addChild(floorNode);
            this.randomIndex++;
          }
        };

        _proto.SetFloorNodePosition = function SetFloorNodePosition(type, floorNode) {
          if (!this.lastNode) return;

          switch (type) {
            case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).FRONT:
              floorNode.setWorldPosition(this.lastNode.worldPosition.x, 0, this.lastNode.worldPosition.z - 3);
              break;

            case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).BACK:
              floorNode.setWorldPosition(this.lastNode.worldPosition.x, 0, this.lastNode.worldPosition.z + 3);
              break;

            case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).LEFT:
              floorNode.setWorldPosition(this.lastNode.worldPosition.x - 3, 0, this.lastNode.worldPosition.z);
              break;

            case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).RIGHT:
              floorNode.setWorldPosition(this.lastNode.worldPosition.x + 3, 0, this.lastNode.worldPosition.z);
              break;

            default:
              break;
          }

          this.lastNode = floorNode;
        }
        /**创建时根据json数据设置新地板的方向属性 */
        ;

        _proto.SetNewFloorTypeData = function SetNewFloorTypeData(floorNode, json, i) {
          var floor = floorNode.getComponent(_crd && Floor === void 0 ? (_reportPossibleCrUseOfFloor({
            error: Error()
          }), Floor) : Floor);

          if (floor) {
            switch (json.floorDirectionData[i]) {
              case '1':
                floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).FRONT;
                break;

              case '2':
                floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).BACK;
                break;

              case '3':
                floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).LEFT;
                break;

              case '4':
                floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).RIGHT;
                break;

              default:
                throw new Error("找不到类型:" + json.Level1.floorDirectionData[i]);
            }

            return floor.floorType;
          }

          throw new Error("找不到类型:" + json.Level1.floorDirectionData[i]);
        };

        _proto.onUpDate = function onUpDate(dt) {
          this.MoveFloor(dt);
        };

        _proto.MoveFloor = function MoveFloor(dt) {
          var _this$Camera, _this$Camera2, _this$Player;

          if (!this.allFloors[this.nowFloorIndex]) return;

          if (!this.allFloors[this.nowFloorIndex].IsNowFloor()) {
            if (this.type == "endlessMode") {
              if (this.nowFloorIndex == 5) this.RemoveFloor();else {
                this.nowFloorIndex++;
              } // if (this.nowFloorIndex > 2) {
              // this.nowFloorIndex = 2;
              // }

              this.CreateFloorForRandom();
            } else {
              this.nowFloorIndex++;
            } // if (this.nowFloorIndex == 1)
            // this.nowFloorIndex--;

          } //若下个结点存在 并且与当前结点的类型不同


          if (this.allFloors[this.nowFloorIndex] && this.allFloors[this.nowFloorIndex + 1]) {
            if (this.nowFloorIndex + 1 < this.allFloors.length && this.allFloors[this.nowFloorIndex + 1].floorType != this.allFloors[this.nowFloorIndex].floorType) {
              //应该转向
              if (Vec3.distance(this.allFloors[this.nowFloorIndex].node.worldPosition, new Vec3(0, 0, 0)) < 0.1) {
                switch (this.allFloors[this.nowFloorIndex + 1].floorType) {
                  case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                    error: Error()
                  }), FloorType) : FloorType).FRONT:
                    this.MoveFront();
                    break;

                  case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                    error: Error()
                  }), FloorType) : FloorType).BACK:
                    this.MoveBack();
                    break;

                  case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                    error: Error()
                  }), FloorType) : FloorType).LEFT:
                    this.MoveLeft();
                    break;

                  case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                    error: Error()
                  }), FloorType) : FloorType).RIGHT:
                    this.MoveRight();
                    break;

                  default:
                    this.MoveStop();
                    break;
                }
              }
            } //转摄像头


            switch (this.allFloors[this.nowFloorIndex + 1].floorType) {
              case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                error: Error()
              }), FloorType) : FloorType).FRONT:
                this.cameraAngle = 0;
                break;

              case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                error: Error()
              }), FloorType) : FloorType).BACK:
                this.cameraAngle = 180;
                break;

              case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                error: Error()
              }), FloorType) : FloorType).LEFT:
                this.cameraAngle = 90;
                break;

              case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                error: Error()
              }), FloorType) : FloorType).RIGHT:
                this.cameraAngle = -90;
                break;
            }
          }

          var out = new Vec3(0, 0, 0);
          var angle = new Vec3(0, 0, 0);
          (_this$Camera = this.Camera) === null || _this$Camera === void 0 ? void 0 : _this$Camera.getWorldRotation().getEulerAngles(angle);
          Vec3.lerp(out, angle, new Vec3(0, this.cameraAngle, 0), 0.1);
          (_this$Camera2 = this.Camera) === null || _this$Camera2 === void 0 ? void 0 : _this$Camera2.setRotationFromEuler(out.x, out.y, out.z);
          (_this$Player = this.Player) === null || _this$Player === void 0 ? void 0 : _this$Player.setRotationFromEuler(out.x, out.y, out.z);

          for (var i = 0; i < this.allFloors.length; i++) {
            var element = this.allFloors[i];
            element.node.setWorldPosition(element.node.worldPosition.x + this.moveSpeedx * this.movespeed * dt, 0, element.node.worldPosition.z + this.moveSpeedz * this.movespeed * dt);
          }
        };

        _proto.RemoveFloor = function RemoveFloor() {
          this.allFloors[0].node.destroy();
          this.allFloors.splice(0, 1);
        };

        _proto.startMove = function startMove() {
          this.moveSpeedx = 0;
          this.moveSpeedz = 1;
        };

        _proto.MoveFront = function MoveFront() {
          this.moveSpeedx = 0;
          this.moveSpeedz = 1;
        };

        _proto.MoveBack = function MoveBack() {
          this.moveSpeedx = 0;
          this.moveSpeedz = -1;
        };

        _proto.MoveLeft = function MoveLeft() {
          this.moveSpeedx = 1;
          this.moveSpeedz = 0;
        };

        _proto.MoveRight = function MoveRight() {
          this.moveSpeedx = -1;
          this.moveSpeedz = 0;
        };

        _proto.MoveStop = function MoveStop() {
          this.moveSpeedx = 0;
          this.moveSpeedz = 0;
        };

        return FloorManager;
      }(_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent), _defineProperty(_class3, "I", void 0), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "floorPrefabs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Camera", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Player", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL0dhbWUvRG9vci9GbG9vck1hbmFuZ2VyLnRzIl0sIm5hbWVzIjpbImluc3RhbnRpYXRlIiwiTm9kZSIsIlByZWZhYiIsIlZlYzMiLCJfZGVjb3JhdG9yIiwiTXlDb21wb25lbnQiLCJGbG9vciIsIkZsb29yVHlwZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkZsb29yTWFuYWdlciIsIkZST05UIiwib25Mb2FkIiwiSSIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJJbml0IiwiQ3JlYXRlRmxvb3IiLCJGbG9vcklEIiwiaSIsImZsb29yUHJlZmFicyIsImxlbmd0aCIsImVsZW1lbnQiLCJkYXRhIiwiSUQiLCJmbG9vciIsImFsbEZsb29ycyIsInB1c2giLCJjb25zb2xlIiwiZXJyb3IiLCJDcmVhdGVGbG9vckZvckpzb24iLCJqc29uIiwiZmxvb3JEYXRhIiwiaWQiLCJOdW1iZXIiLCJmbG9vck5vZGUiLCJ0eXBlIiwiU2V0TmV3Rmxvb3JUeXBlRGF0YSIsInNldFdvcmxkUG9zaXRpb24iLCJsYXN0Tm9kZSIsIlNldEZsb29yTm9kZVBvc2l0aW9uIiwiYWRkQ2hpbGQiLCJDcmVhdGVGbG9vckZvclJhbmRvbSIsImZsb29yVHlwZSIsInJhbmRvbUluZGV4IiwibGFzdEZsb29yVHlwZSIsImZyb250TnVtYmVyIiwiTWF0aCIsInJhbmRvbSIsIkxFRlQiLCJSSUdIVCIsImYiLCJ3b3JsZFBvc2l0aW9uIiwieCIsInoiLCJCQUNLIiwiZmxvb3JEaXJlY3Rpb25EYXRhIiwiRXJyb3IiLCJMZXZlbDEiLCJvblVwRGF0ZSIsImR0IiwiTW92ZUZsb29yIiwibm93Rmxvb3JJbmRleCIsIklzTm93Rmxvb3IiLCJSZW1vdmVGbG9vciIsImRpc3RhbmNlIiwiTW92ZUZyb250IiwiTW92ZUJhY2siLCJNb3ZlTGVmdCIsIk1vdmVSaWdodCIsIk1vdmVTdG9wIiwiY2FtZXJhQW5nbGUiLCJvdXQiLCJhbmdsZSIsIkNhbWVyYSIsImdldFdvcmxkUm90YXRpb24iLCJnZXRFdWxlckFuZ2xlcyIsImxlcnAiLCJzZXRSb3RhdGlvbkZyb21FdWxlciIsInkiLCJQbGF5ZXIiLCJtb3ZlU3BlZWR4IiwibW92ZXNwZWVkIiwibW92ZVNwZWVkeiIsImRlc3Ryb3kiLCJzcGxpY2UiLCJzdGFydE1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQ0EsTUFBQUEsVyxPQUFBQSxXO0FBQW1CQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsTSxPQUFBQSxNO0FBQXVDQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsVSxPQUFBQSxVOztBQUUvRkMsTUFBQUEsVyw0QkFBQUEsVzs7QUFHQUMsTUFBQUEsSyxZQUFBQSxLOztBQUNBQyxNQUFBQSxTLGdCQUFBQSxTOzs7Ozs7O0FBRURDLE1BQUFBLE8sR0FBc0JKLFUsQ0FBdEJJLE87QUFBU0MsTUFBQUEsUSxHQUFhTCxVLENBQWJLLFE7OzhCQUdKQyxZLFdBRFpGLE9BQU8sQ0FBQyxjQUFELEMsVUFJSEMsUUFBUSxDQUFDUCxNQUFELEMsVUFFUk8sUUFBUSxDQUFDUixJQUFELEMsVUFFUlEsUUFBUSxDQUFDUixJQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztzRUFHWSxFOztpRUFFTixPOzt3RUFFTyxDOztxRUFFRSxJOzswRUFFUjtBQUFBO0FBQUEsc0NBQVVVLEs7O3dFQUVKLEM7O3NFQUVGLEM7O3VFQUVDLEM7O3VFQUVBLEM7OzBFQUVHLEM7O3dFQUVGLEM7Ozs7Ozs7ZUFFdEJDLE0sR0FBQSxrQkFBUztBQUNMRixVQUFBQSxZQUFZLENBQUNHLENBQWIsR0FBaUIsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCTCxZQUF2QixDQUFqQjtBQUNILFM7O2VBQ0RNLEksR0FBQSxnQkFBTyxDQUVIO0FBQ0gsUzs7ZUFFREMsVyxHQUFBLHFCQUFZ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O0FBQ0EsZUFBSzFELFNBQUwsQ0FBZTJELE1BQWYsQ0FBc0IsQ0FBdEIsRUFBeUIsQ0FBekI7QUFDSCxTOztlQUNEQyxTLEdBQUEscUJBQVk7QUFDUixlQUFLTCxVQUFMLEdBQWtCLENBQWxCO0FBQ0EsZUFBS0UsVUFBTCxHQUFrQixDQUFsQjtBQUNILFM7O2VBQ0RqQixTLEdBQUEscUJBQVk7QUFDUixlQUFLZSxVQUFMLEdBQWtCLENBQWxCO0FBQ0EsZUFBS0UsVUFBTCxHQUFrQixDQUFsQjtBQUNILFM7O2VBQ0RoQixRLEdBQUEsb0JBQVc7QUFDUCxlQUFLYyxVQUFMLEdBQWtCLENBQWxCO0FBQ0EsZUFBS0UsVUFBTCxHQUFrQixDQUFDLENBQW5CO0FBQ0gsUzs7ZUFDRGYsUSxHQUFBLG9CQUFXO0FBQ1AsZUFBS2EsVUFBTCxHQUFrQixDQUFsQjtBQUNBLGVBQUtFLFVBQUwsR0FBa0IsQ0FBbEI7QUFDSCxTOztlQUNEZCxTLEdBQUEscUJBQVk7QUFDUixlQUFLWSxVQUFMLEdBQWtCLENBQUMsQ0FBbkI7QUFDQSxlQUFLRSxVQUFMLEdBQWtCLENBQWxCO0FBQ0gsUzs7ZUFDRGIsUSxHQUFBLG9CQUFXO0FBQ1AsZUFBS1csVUFBTCxHQUFrQixDQUFsQjtBQUNBLGVBQUtFLFVBQUwsR0FBa0IsQ0FBbEI7QUFDSCxTOzs7Ozs7Ozs7O2lCQTNRd0IsRTs7Ozs7OztpQkFFSCxJOzs7Ozs7O2lCQUVBLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDQ0NsYXNzLCBkaXJlY3RvciwgRW51bSwgaW5zdGFudGlhdGUsIG1hdGgsIE5vZGUsIFByZWZhYiwgUXVhdCwgU3lzdGVtLCBzeXN0ZW1FdmVudCwgdjMsIFZlYzMsIF9kZWNvcmF0b3IgfSBmcm9tIFwiY2NcIjtcbmltcG9ydCB7IERFQlVHLCBFRElUT1IgfSBmcm9tIFwiY2NlLmVudlwiO1xuaW1wb3J0IHsgTXlDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vLi4vQ29tbW9uL0dhbWUvTXlDb21wb25lbnRcIjtcbmltcG9ydCB7IERvb3IgfSBmcm9tIFwiLi9Eb29yXCI7XG5pbXBvcnQgeyBEb29yVHlwZSB9IGZyb20gXCIuL0Rvb3JUeXBlXCI7XG5pbXBvcnQgeyBGbG9vciB9IGZyb20gXCIuL0Zsb29yXCI7XG5pbXBvcnQgeyBGbG9vclR5cGUgfSBmcm9tIFwiLi9GbG9vclR5cGVcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0Zsb29yTWFuYWdlcicpXG5leHBvcnQgY2xhc3MgRmxvb3JNYW5hZ2VyIGV4dGVuZHMgTXlDb21wb25lbnQge1xuXG4gICAgc3RhdGljIEk6IEZsb29yTWFuYWdlcjtcbiAgICBAcHJvcGVydHkoUHJlZmFiKVxuICAgIGZsb29yUHJlZmFiczogUHJlZmFiW10gPSBbXTtcbiAgICBAcHJvcGVydHkoTm9kZSlcbiAgICBDYW1lcmE6IE5vZGUgfCBudWxsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoTm9kZSlcbiAgICBQbGF5ZXI6IE5vZGUgfCBudWxsID0gbnVsbDtcbiAgICAvKirmiYDmnInnmoTlnLDmnb8gKi9cbiAgICBhbGxGbG9vcnM6IEZsb29yW10gPSBbXTtcbiAgICAvKirmuLjmiI/mqKHlvI8gKi9cbiAgICB0eXBlOiBzdHJpbmcgPSBcImxldmVsXCI7XG4gICAgLyoq6ZqP5py65Zyw5p2/5Liq5pWw5qih5byPICovXG4gICAgcmFuZG9tSW5kZXg6IG51bWJlciA9IDA7XG4gICAgLyoq5LiK5LiA5Liq5Zyw5p2/ICovXG4gICAgbGFzdE5vZGU6IE5vZGUgfCBudWxsID0gbnVsbDtcbiAgICAvKirkuIrkuIDkuKrlnLDmnb8g5pa55ZCR57G75Z6LKi9cbiAgICBsYXN0Rmxvb3JUeXBlID0gRmxvb3JUeXBlLkZST05UO1xuICAgIC8qKuWQjOaWueWQkeexu+Wei+eahOWcsOadv+S4quaVsCovXG4gICAgZnJvbnROdW1iZXI6IG51bWJlciA9IDA7XG4gICAgLyoq56e75Yqo6YCf5bqmKi9cbiAgICBtb3Zlc3BlZWQ6IG51bWJlciA9IDU7XG4gICAgLyoqeOaWueWQkSovXG4gICAgbW92ZVNwZWVkeDogbnVtYmVyID0gMDtcbiAgICAvKip65pa55ZCRKi9cbiAgICBtb3ZlU3BlZWR6OiBudW1iZXIgPSAwO1xuICAgIC8qKuW9k+WJjeWcsOadv+e0ouW8lSovXG4gICAgbm93Rmxvb3JJbmRleDogbnVtYmVyID0gMDtcbiAgICAvKirmkYTlg4/mnLrop5LluqYqL1xuICAgIGNhbWVyYUFuZ2xlOiBudW1iZXIgPSAwO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBGbG9vck1hbmFnZXIuSSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoRmxvb3JNYW5hZ2VyKSBhcyBGbG9vck1hbmFnZXI7XG4gICAgfVxuICAgIEluaXQoKSB7XG5cbiAgICAgICAgLy8gdGhpcy5DcmVhdGVGbG9vckZvckpzb24odGhpcy5kYXRhKTtcbiAgICB9XG5cbiAgICBDcmVhdGVGbG9vcihGbG9vcklEOiBudW1iZXIpOiBOb2RlIHwgbnVsbCB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mbG9vclByZWZhYnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSAodGhpcy5mbG9vclByZWZhYnNbaV0uZGF0YSBhcyBOb2RlKS5nZXRDb21wb25lbnQoRmxvb3IpIGFzIEZsb29yO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQuSUQgPT0gRmxvb3JJRCkge1xuICAgICAgICAgICAgICAgIGxldCBmbG9vciA9IGluc3RhbnRpYXRlKHRoaXMuZmxvb3JQcmVmYWJzW2ldKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFsbEZsb29ycy5wdXNoKGZsb29yLmdldENvbXBvbmVudChGbG9vcikgYXMgRmxvb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmbG9vcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmVycm9yKFwi5Yib5bu65Zyw5p2/5aSx6LSlLOS4jeWtmOWcqElE5Li6OlwiLCBGbG9vcklELCBcIueahOWcsOadvyzor7fmo4Dmn6XlkI7ph43or5UhXCIpO1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBDcmVhdGVGbG9vckZvckpzb24oanNvbjogYW55KSB7XG4gICAgICAgIC8vIGpzb24gPSB0aGlzLmRhdGE7XG4gICAgICAgIGxldCBub2RlID0gdGhpcy5ub2RlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGpzb24uZmxvb3JEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0ganNvbi5mbG9vckRhdGFbaV07XG4gICAgICAgICAgICBjb25zdCBpZCA9IE51bWJlcihlbGVtZW50KSArIDEwMDAwO1xuICAgICAgICAgICAgbGV0IGZsb29yTm9kZSA9IHRoaXMuQ3JlYXRlRmxvb3IoaWQpO1xuICAgICAgICAgICAgaWYgKGZsb29yTm9kZSkge1xuICAgICAgICAgICAgICAgIGxldCB0eXBlID0gdGhpcy5TZXROZXdGbG9vclR5cGVEYXRhKGZsb29yTm9kZSwganNvbiwgaSk7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBmbG9vck5vZGUuc2V0V29ybGRQb3NpdGlvbigwLCAwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Tm9kZSA9IGZsb29yTm9kZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlNldEZsb29yTm9kZVBvc2l0aW9uKHR5cGUsIGZsb29yTm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUuYWRkQ2hpbGQoZmxvb3JOb2RlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQ3JlYXRlRmxvb3JGb3JSYW5kb20oKSB7XG4gICAgICAgIC8vIGpzb24gPSB0aGlzLmRhdGE7XG4gICAgICAgIGxldCBub2RlID0gdGhpcy5ub2RlO1xuICAgICAgICBsZXQgZmxvb3JOb2RlO1xuICAgICAgICBsZXQgZmxvb3IgPSB7IGZsb29yVHlwZTogRmxvb3JUeXBlLkZST05UIH07XG4gICAgICAgIGlmICh0aGlzLnJhbmRvbUluZGV4IDw9IDUpIHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gTnVtYmVyKDEpICsgMTAwMDA7XG4gICAgICAgICAgICBmbG9vck5vZGUgPSB0aGlzLkNyZWF0ZUZsb29yKGlkKTtcbiAgICAgICAgICAgIGZsb29yLmZsb29yVHlwZSA9IEZsb29yVHlwZS5GUk9OVDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gTnVtYmVyKDEpICsgMTAwMDA7XG4gICAgICAgICAgICBmbG9vck5vZGUgPSB0aGlzLkNyZWF0ZUZsb29yKGlkKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmxhc3RGbG9vclR5cGUgPT0gRmxvb3JUeXBlLkZST05UKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZnJvbnROdW1iZXIgPj0gNSAmJiBNYXRoLnJhbmRvbSgpIDwgMC4yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnJvbnROdW1iZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuNSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb29yLmZsb29yVHlwZSA9IEZsb29yVHlwZS5MRUZUO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9vci5mbG9vclR5cGUgPSBGbG9vclR5cGUuUklHSFQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcm9udE51bWJlcisrO1xuICAgICAgICAgICAgICAgICAgICBmbG9vci5mbG9vclR5cGUgPSBGbG9vclR5cGUuRlJPTlQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxhc3RGbG9vclR5cGUgPT0gRmxvb3JUeXBlLkxFRlQgfHwgdGhpcy5sYXN0Rmxvb3JUeXBlID09IEZsb29yVHlwZS5SSUdIVCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZyb250TnVtYmVyID49IDUgJiYgTWF0aC5yYW5kb20oKSA8IDAuMikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyb250TnVtYmVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZmxvb3IuZmxvb3JUeXBlID0gRmxvb3JUeXBlLkZST05UO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnJvbnROdW1iZXIrKztcbiAgICAgICAgICAgICAgICAgICAgZmxvb3IuZmxvb3JUeXBlID0gdGhpcy5sYXN0Rmxvb3JUeXBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmbG9vck5vZGUpIHtcbiAgICAgICAgICAgIGxldCBmID0gZmxvb3JOb2RlLmdldENvbXBvbmVudChGbG9vcikgYXMgRmxvb3I7XG4gICAgICAgICAgICBmLmZsb29yVHlwZSA9IGZsb29yLmZsb29yVHlwZTtcbiAgICAgICAgICAgIHRoaXMubGFzdEZsb29yVHlwZSA9IGZsb29yLmZsb29yVHlwZTtcbiAgICAgICAgICAgIGlmICh0aGlzLnJhbmRvbUluZGV4ID09IDApIHtcbiAgICAgICAgICAgICAgICBmbG9vck5vZGUuc2V0V29ybGRQb3NpdGlvbigwLCAwLCAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3ROb2RlID0gZmxvb3JOb2RlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLlNldEZsb29yTm9kZVBvc2l0aW9uKGZsb29yLmZsb29yVHlwZSwgZmxvb3JOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGUuYWRkQ2hpbGQoZmxvb3JOb2RlKTtcbiAgICAgICAgICAgIHRoaXMucmFuZG9tSW5kZXgrKztcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBTZXRGbG9vck5vZGVQb3NpdGlvbih0eXBlOiBGbG9vclR5cGUsIGZsb29yTm9kZTogTm9kZSkge1xuICAgICAgICBpZiAoIXRoaXMubGFzdE5vZGUpIHJldHVybjtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEZsb29yVHlwZS5GUk9OVDpcbiAgICAgICAgICAgICAgICBmbG9vck5vZGUuc2V0V29ybGRQb3NpdGlvbih0aGlzLmxhc3ROb2RlLndvcmxkUG9zaXRpb24ueCwgMCwgdGhpcy5sYXN0Tm9kZS53b3JsZFBvc2l0aW9uLnogLSAzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRmxvb3JUeXBlLkJBQ0s6XG4gICAgICAgICAgICAgICAgZmxvb3JOb2RlLnNldFdvcmxkUG9zaXRpb24odGhpcy5sYXN0Tm9kZS53b3JsZFBvc2l0aW9uLngsIDAsIHRoaXMubGFzdE5vZGUud29ybGRQb3NpdGlvbi56ICsgMyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEZsb29yVHlwZS5MRUZUOlxuICAgICAgICAgICAgICAgIGZsb29yTm9kZS5zZXRXb3JsZFBvc2l0aW9uKHRoaXMubGFzdE5vZGUud29ybGRQb3NpdGlvbi54IC0gMywgMCwgdGhpcy5sYXN0Tm9kZS53b3JsZFBvc2l0aW9uLnopO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBGbG9vclR5cGUuUklHSFQ6XG4gICAgICAgICAgICAgICAgZmxvb3JOb2RlLnNldFdvcmxkUG9zaXRpb24odGhpcy5sYXN0Tm9kZS53b3JsZFBvc2l0aW9uLnggKyAzLCAwLCB0aGlzLmxhc3ROb2RlLndvcmxkUG9zaXRpb24ueik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFzdE5vZGUgPSBmbG9vck5vZGU7XG4gICAgfVxuXG4gICAgLyoq5Yib5bu65pe25qC55o2uanNvbuaVsOaNruiuvue9ruaWsOWcsOadv+eahOaWueWQkeWxnuaApyAqL1xuICAgIHByaXZhdGUgU2V0TmV3Rmxvb3JUeXBlRGF0YShmbG9vck5vZGU6IE5vZGUsIGpzb246IGFueSwgaTogbnVtYmVyKTogRmxvb3JUeXBlIHtcbiAgICAgICAgbGV0IGZsb29yID0gZmxvb3JOb2RlLmdldENvbXBvbmVudChGbG9vcikgYXMgRmxvb3I7XG4gICAgICAgIGlmIChmbG9vcikge1xuICAgICAgICAgICAgc3dpdGNoIChqc29uLmZsb29yRGlyZWN0aW9uRGF0YVtpXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJzEnOlxuICAgICAgICAgICAgICAgICAgICBmbG9vci5mbG9vclR5cGUgPSBGbG9vclR5cGUuRlJPTlQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJzInOlxuICAgICAgICAgICAgICAgICAgICBmbG9vci5mbG9vclR5cGUgPSBGbG9vclR5cGUuQkFDSztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnMyc6XG4gICAgICAgICAgICAgICAgICAgIGZsb29yLmZsb29yVHlwZSA9IEZsb29yVHlwZS5MRUZUO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICc0JzpcbiAgICAgICAgICAgICAgICAgICAgZmxvb3IuZmxvb3JUeXBlID0gRmxvb3JUeXBlLlJJR0hUO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLmib7kuI3liLDnsbvlnos6XCIgKyBqc29uLkxldmVsMS5mbG9vckRpcmVjdGlvbkRhdGFbaV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmxvb3IuZmxvb3JUeXBlO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIuaJvuS4jeWIsOexu+WeizpcIiArIGpzb24uTGV2ZWwxLmZsb29yRGlyZWN0aW9uRGF0YVtpXSlcbiAgICB9XG4gICAgb25VcERhdGUoZHQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLk1vdmVGbG9vcihkdCk7XG4gICAgfVxuICAgIE1vdmVGbG9vcihkdDogbnVtYmVyKSB7XG4gICAgICAgIGlmICghdGhpcy5hbGxGbG9vcnNbdGhpcy5ub3dGbG9vckluZGV4XSkgcmV0dXJuO1xuICAgICAgICBpZiAoIXRoaXMuYWxsRmxvb3JzW3RoaXMubm93Rmxvb3JJbmRleF0uSXNOb3dGbG9vcigpKSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnR5cGUgPT0gXCJlbmRsZXNzTW9kZVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubm93Rmxvb3JJbmRleCA9PSA1KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLlJlbW92ZUZsb29yKCk7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm93Rmxvb3JJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5ub3dGbG9vckluZGV4ID4gMikge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMubm93Rmxvb3JJbmRleCA9IDI7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIHRoaXMuQ3JlYXRlRmxvb3JGb3JSYW5kb20oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3dGbG9vckluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiAodGhpcy5ub3dGbG9vckluZGV4ID09IDEpXG5cbiAgICAgICAgICAgIC8vIHRoaXMubm93Rmxvb3JJbmRleC0tO1xuICAgICAgICB9XG4gICAgICAgIC8v6Iul5LiL5Liq57uT54K55a2Y5ZyoIOW5tuS4lOS4juW9k+WJjee7k+eCueeahOexu+Wei+S4jeWQjFxuICAgICAgICBpZiAodGhpcy5hbGxGbG9vcnNbdGhpcy5ub3dGbG9vckluZGV4XSAmJiB0aGlzLmFsbEZsb29yc1t0aGlzLm5vd0Zsb29ySW5kZXggKyAxXSkge1xuICAgICAgICAgICAgaWYgKHRoaXMubm93Rmxvb3JJbmRleCArIDEgPCB0aGlzLmFsbEZsb29ycy5sZW5ndGggJiYgdGhpcy5hbGxGbG9vcnNbdGhpcy5ub3dGbG9vckluZGV4ICsgMV0uZmxvb3JUeXBlICE9IHRoaXMuYWxsRmxvb3JzW3RoaXMubm93Rmxvb3JJbmRleF0uZmxvb3JUeXBlKSB7XG4gICAgICAgICAgICAgICAgLy/lupTor6XovazlkJFcbiAgICAgICAgICAgICAgICBpZiAoVmVjMy5kaXN0YW5jZSh0aGlzLmFsbEZsb29yc1t0aGlzLm5vd0Zsb29ySW5kZXhdLm5vZGUud29ybGRQb3NpdGlvbiwgbmV3IFZlYzMoMCwgMCwgMCkpIDwgMC4xKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5hbGxGbG9vcnNbdGhpcy5ub3dGbG9vckluZGV4ICsgMV0uZmxvb3JUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZsb29yVHlwZS5GUk9OVDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk1vdmVGcm9udCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGbG9vclR5cGUuQkFDSzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk1vdmVCYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZsb29yVHlwZS5MRUZUOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTW92ZUxlZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmxvb3JUeXBlLlJJR0hUOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTW92ZVJpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTW92ZVN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8v6L2s5pGE5YOP5aS0XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuYWxsRmxvb3JzW3RoaXMubm93Rmxvb3JJbmRleCArIDFdLmZsb29yVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgRmxvb3JUeXBlLkZST05UOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYUFuZ2xlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBGbG9vclR5cGUuQkFDSzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFBbmdsZSA9IDE4MDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBGbG9vclR5cGUuTEVGVDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFBbmdsZSA9IDkwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEZsb29yVHlwZS5SSUdIVDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFBbmdsZSA9IC05MDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG91dCA9IG5ldyBWZWMzKDAsIDAsIDApO1xuICAgICAgICBsZXQgYW5nbGUgPSBuZXcgVmVjMygwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5DYW1lcmE/LmdldFdvcmxkUm90YXRpb24oKS5nZXRFdWxlckFuZ2xlcyhhbmdsZSlcbiAgICAgICAgVmVjMy5sZXJwKG91dCwgYW5nbGUsIG5ldyBWZWMzKDAsIHRoaXMuY2FtZXJhQW5nbGUsIDApLCAwLjEpO1xuICAgICAgICB0aGlzLkNhbWVyYT8uc2V0Um90YXRpb25Gcm9tRXVsZXIob3V0LngsIG91dC55LCBvdXQueik7XG4gICAgICAgIHRoaXMuUGxheWVyPy5zZXRSb3RhdGlvbkZyb21FdWxlcihvdXQueCwgb3V0LnksIG91dC56KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFsbEZsb29ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuYWxsRmxvb3JzW2ldO1xuICAgICAgICAgICAgZWxlbWVudC5ub2RlLnNldFdvcmxkUG9zaXRpb24oZWxlbWVudC5ub2RlLndvcmxkUG9zaXRpb24ueCArICh0aGlzLm1vdmVTcGVlZHggKiB0aGlzLm1vdmVzcGVlZCAqIGR0KSwgMCwgZWxlbWVudC5ub2RlLndvcmxkUG9zaXRpb24ueiArICh0aGlzLm1vdmVTcGVlZHogKiB0aGlzLm1vdmVzcGVlZCAqIGR0KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBSZW1vdmVGbG9vcigpIHtcbiAgICAgICAgdGhpcy5hbGxGbG9vcnNbMF0ubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuYWxsRmxvb3JzLnNwbGljZSgwLCAxKTtcbiAgICB9XG4gICAgc3RhcnRNb3ZlKCkge1xuICAgICAgICB0aGlzLm1vdmVTcGVlZHggPSAwO1xuICAgICAgICB0aGlzLm1vdmVTcGVlZHogPSAxO1xuICAgIH1cbiAgICBNb3ZlRnJvbnQoKSB7XG4gICAgICAgIHRoaXMubW92ZVNwZWVkeCA9IDA7XG4gICAgICAgIHRoaXMubW92ZVNwZWVkeiA9IDE7XG4gICAgfVxuICAgIE1vdmVCYWNrKCkge1xuICAgICAgICB0aGlzLm1vdmVTcGVlZHggPSAwO1xuICAgICAgICB0aGlzLm1vdmVTcGVlZHogPSAtMTtcbiAgICB9XG4gICAgTW92ZUxlZnQoKSB7XG4gICAgICAgIHRoaXMubW92ZVNwZWVkeCA9IDE7XG4gICAgICAgIHRoaXMubW92ZVNwZWVkeiA9IDA7XG4gICAgfVxuICAgIE1vdmVSaWdodCgpIHtcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWR4ID0gLTE7XG4gICAgICAgIHRoaXMubW92ZVNwZWVkeiA9IDA7XG4gICAgfVxuICAgIE1vdmVTdG9wKCkge1xuICAgICAgICB0aGlzLm1vdmVTcGVlZHggPSAwO1xuICAgICAgICB0aGlzLm1vdmVTcGVlZHogPSAwO1xuICAgIH1cbn0iXX0=